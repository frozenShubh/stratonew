
import os
import sys
import json
from pathlib import Path
from dotenv import load_dotenv
import re

# Add backend to path
backend_path = Path('/Users/admin/Documents/stratonew/stratonew/backend')
sys.path.append(str(backend_path))

# Load env
load_dotenv(backend_path / '.env')

import google.generativeai as genai
from tavily import TavilyClient

def test_enhanced_generation():
    gemini_key = os.environ.get('GEMINI_API_KEY')
    tavily_key = os.environ.get('TAVILY_API_KEY')
    
    genai.configure(api_key=gemini_key)
    model = genai.GenerativeModel('gemini-2.5-flash')
    
    # Mock past topics
    past_topics = [
        "Why 87% of AI Projects Fail",
        "The GCC Setup Playbook",
        "The AI-Powered Ascent",
        "The AI Chasm"
    ]
    past_topics_str = "\n".join([f"- {t}" for t in past_topics])
    
    print("Step 1: Researching...")
    tavily = TavilyClient(api_key=tavily_key)
    search_query = "latest enterprise AI adoption news May 2026"
    search_results = tavily.search(query=search_query, max_results=2)
    context = "\n".join([f"Source: {res['url']}\nContent: {res['content']}" for res in search_results['results']])
    
    print("Step 2: Drafting...")
    draft_prompt = f"""
    You are the Stratosport Team. audience: executives.
    RECENT Topics (AVOID THESE):
    {past_topics_str}
    
    Context: {context}
    
    Task 1: Blog post (HTML).
    Task 2: LinkedIn caption (NO PLACEHOLDERS).
    
    Return JSON: title, slug, excerpt, tags, content, linkedin
    """
    
    response = model.generate_content(draft_prompt)
    data = json.loads(re.sub(r'```json\n?|\n?```', '', response.text).strip())
    print(f"Draft Title: {data['title']}")
    
    print("Step 3: Proofreading...")
    proofread_prompt = f"""
    Review for placeholders like [Link], tone, and variety. 
    Original: {json.dumps(data, indent=2)}
    Return polished JSON.
    """
    
    proof_response = model.generate_content(proofread_prompt)
    proof_data = json.loads(re.sub(r'```json\n?|\n?```', '', proof_response.text).strip())
    
    print("\n--- FINAL VERIFICATION ---")
    print(f"Final Title: {proof_data['title']}")
    print(f"LinkedIn Caption (Preview): {proof_data['linkedin'][:100]}...")
    
    # Check for placeholders
    if "[" in proof_data['linkedin'] and "]" in proof_data['linkedin']:
        print("WARNING: Placeholder detected in LinkedIn post!")
    else:
        print("SUCCESS: No placeholders detected.")

if __name__ == "__main__":
    test_enhanced_generation()
