import os
import re
import datetime
from tavily import TavilyClient
import google.generativeai as genai
from github import Github
import requests

def run_weekly_agent_workflow():
    # 1. Load keys
    tavily_key = os.environ.get('TAVILY_API_KEY')
    gemini_key = os.environ.get('GEMINI_API_KEY')
    github_token = os.environ.get('GITHUB_TOKEN')
    linkedin_token = os.environ.get('LINKEDIN_ACCESS_TOKEN')
    
    if not all([tavily_key, gemini_key, github_token]):
        raise Exception("Missing required API keys for agent workflow")
        
    print("Starting agent workflow...")

    # 2. Research Phase (Tavily)
    print("Researching recent news...")
    tavily = TavilyClient(api_key=tavily_key)
    search_query = "latest enterprise AI adoption, tech leadership trends, OR India GCC strategy news this week"
    search_results = tavily.search(query=search_query, search_depth="advanced", max_results=3)
    
    context = "\n".join([f"Source: {res['url']}\nContent: {res['content']}" for res in search_results['results']])

    # 3. Writing Phase (Gemini)
    print("Drafting blog post via Gemini...")
    genai.configure(api_key=gemini_key)
    model = genai.GenerativeModel('gemini-2.5-flash')
    
    prompt = f"""
    You are an expert AI and Technology Leadership consultant, similar to a former FAANG engineering leader now running a high-end consulting firm called 'Stratosport'.
    Your audience is enterprise executives, VP of Engineering, and business leaders.
    
    Here is the latest news context from this week:
    {context}
    
    Task 1: Write an opinionated, high-value blog post tying into one of these news trends.
    The tone should be authoritative, practical, and highly professional. Do not be overly promotional, but provide real value.
    The post MUST end with a Call to Action pointing to the Contact page.
    
    Format the blog post in standard HTML (using <h2>, <h3>, <p>, <ul>, <li>, <strong>) matching the styling of an existing site. 
    Wrap headers like this: <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">
    Wrap bullet points like this: <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;"><span style="color: #539AC1; font-weight: bold;">→</span><span><strong style="color: white;">...</span></li>
    
    Task 2: Write a LinkedIn post caption to share this blog post. It should have a strong hook, 3-4 bullet points, relevant hashtags, and invite readers to read the full post.
    
    Return the response STRICTLY in valid JSON format. Do not use markdown code blocks, just raw JSON with the following keys:
    "title" - The blog post title
    "slug" - kebab-case-slug
    "excerpt" - A 2-3 sentence excerpt
    "tags" - Array of string tags
    "content" - The raw HTML content string
    "linkedin" - The LinkedIn post string
    """
    
    import json
    response = model.generate_content(prompt)
    output = response.text.strip()
    if output.startswith("```json"):
        output = output[7:-3].strip()
    elif output.startswith("```"):
        output = output[3:-3].strip()
        
    try:
        data = json.loads(output)
        title = data["title"]
        slug = data["slug"]
        excerpt = data["excerpt"]
        tags = data["tags"]
        content = data["content"]
        linkedin_post = data["linkedin"]
    except Exception as e:
        raise Exception(f"Failed to parse LLM JSON output: {e}\\nRaw output: {output}")
    
    today = datetime.datetime.now()
    date_str = today.strftime("%B %d, %Y")
    date_iso = today.strftime("%Y-%m-%d")
    
    # Read time estimate (rough)
    word_count = len(re.sub(r'<[^>]+>', '', content).split())
    read_time = max(1, round(word_count / 200))

    # 4. Publish to Website (GitHub)
    print(f"Committing new blog post '{title}' to GitHub...")
    try:
        g = Github(github_token)
        repo = g.get_repo("frozenShubh/stratonew")
        file_path = "frontend/src/data/blogPosts.js"
        
        contents = repo.get_contents(file_path)
        file_content = contents.decoded_content.decode('utf-8')
        
        match = re.search(r'];\s*$', file_content)
        if not match:
            raise Exception("Could not parse blogPosts.js to inject new post")
            
        tags_formatted = ", ".join([f"'{t}'" for t in tags])
        
        new_post_obj = f"""  {{
    slug: '{slug}',
    title: '{title.replace("'", "\\'")}',
    excerpt: '{excerpt.replace("'", "\\'")}',
    category: 'Industry Insights',
    author: 'Stratosport Team',
    date: '{date_str}',
    dateISO: '{date_iso}',
    readTime: '{read_time} min read',
    tags: [{tags_formatted}],
    content: `
      {content}
    `,
  }},
"""
        
        new_file_content = file_content[:match.start()] + new_post_obj + file_content[match.start():]
        
        repo.update_file(
            contents.path,
            f"Auto-publish weekly blog post: {title}",
            new_file_content,
            contents.sha,
            branch="main"
        )
        github_success = True
    except Exception as e:
        print(f"GitHub push failed: {e}")
        print("Writing locally instead...")
        # Fallback to local file
        local_path = "../frontend/src/data/blogPosts.js"
        with open(local_path, "r") as f:
            local_content = f.read()
            
        match = re.search(r'];\s*$', local_content)
        if match:
            tags_formatted = ", ".join([f"'{t}'" for t in tags])
            new_post_obj = f"""  {{
    slug: '{slug}',
    title: '{title.replace("'", "\\'")}',
    excerpt: '{excerpt.replace("'", "\\'")}',
    category: 'Industry Insights',
    author: 'Shubham Agrawal',
    date: '{date_str}',
    dateISO: '{date_iso}',
    readTime: '{read_time} min read',
    tags: [{tags_formatted}],
    content: `
      {content}
    `,
  }},
"""
            new_local_content = local_content[:match.start()] + new_post_obj + local_content[match.start():]
            with open(local_path, "w") as f:
                f.write(new_local_content)
        github_success = False

    # 5. Publish to LinkedIn
    if linkedin_token:
        print("Publishing to LinkedIn Company Page...")
        headers = {
            'Authorization': f'Bearer {linkedin_token}',
            'X-Restli-Protocol-Version': '2.0.0',
            'Content-Type': 'application/json'
        }
        
        # We use the Stratosport company URN directly
        urn = "urn:li:organization:115744746"
        
        post_url = "https://api.linkedin.com/v2/ugcPosts"
        final_linkedin_text = f"{linkedin_post}\n\nRead the full insight here: https://stratosport.in/blog/{slug}"
        
        post_payload = {
            "author": urn,
            "lifecycleState": "PUBLISHED",
            "specificContent": {
                "com.linkedin.ugc.ShareContent": {
                    "shareCommentary": {
                        "text": final_linkedin_text
                    },
                    "shareMediaCategory": "NONE"
                }
            },
            "visibility": {
                "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
            }
        }
        
        resp = requests.post(post_url, headers=headers, json=post_payload)
        if resp.ok:
            print("LinkedIn post published!")
        else:
            print("Failed to publish to LinkedIn.")
            print(resp.text)
    else:
        print("Skipping LinkedIn post (no LINKEDIN_ACCESS_TOKEN provided).")

    return {
        "success": True,
        "title": title,
        "slug": slug,
        "github_published": github_success,
        "linkedin_published": bool(linkedin_token)
    }
