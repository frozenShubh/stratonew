/**
 * Blog Posts Data
 * 
 * To add a new blog post:
 * 1. Add a new object to the blogPosts array below
 * 2. Fill in all required fields (slug, title, excerpt, content, etc.)
 * 3. The content field accepts HTML — use <h2>, <p>, <ul>, <li>, <strong>, <em> tags
 * 4. The post will automatically appear on /blog and be accessible at /blog/{slug}
 */

export const blogPosts = [
  {
    slug: 'why-ai-projects-fail-and-how-to-fix-it',
    title: 'Why 87% of AI Projects Fail — And What Production-Ready Actually Means',
    excerpt: 'Most enterprises are stuck in AI pilot purgatory. The gap isn\'t the models — it\'s engineering discipline, data infrastructure, and organizational readiness. Here\'s how to bridge it.',
    category: 'AI Transformation',
    author: 'Shubham Agrawal',
    date: 'April 28, 2026',
    dateISO: '2026-04-28',
    readTime: '8 min read',
    tags: ['AI', 'Production Systems', 'Enterprise', 'MLOps', 'Digital Transformation'],
    content: `
      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2rem; font-family: 'Space Grotesk', sans-serif;">The AI Pilot Graveyard</h2>
      <p>Every enterprise leader I speak to has the same story: "We ran an AI pilot last year. It showed promising results. We're still trying to get it into production."</p>
      <p>This isn't anecdotal — industry data consistently shows that <strong style="color: #A5C7E0;">85-87% of AI projects never make it to production</strong>. Not because the models don't work. Because the surrounding engineering, infrastructure, and organizational fabric isn't built to support AI at production scale.</p>
      <p>After spending 20 years building production systems at companies like Microsoft, Amazon, and Amagi — and now helping enterprises operationalize AI through Stratosport — I've seen the same failure patterns repeat. Here's what actually goes wrong, and how to fix it.</p>

      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">The Three Gaps That Kill AI Projects</h2>
      
      <h3 style="font-size: 1.25rem; font-weight: 600; color: #539AC1; margin-bottom: 0.75rem; margin-top: 1.5rem;">1. The Data Infrastructure Gap</h3>
      <p>Data scientists build models on clean, curated datasets. Production data is messy, delayed, and distributed across dozens of systems. The gap between "training data" and "live data pipeline" is where most projects die.</p>
      <p>What's needed: A proper data platform — not a data lake dump, but purpose-built pipelines with data quality monitoring, feature stores, and real-time processing capabilities. This is infrastructure work, not data science work.</p>

      <h3 style="font-size: 1.25rem; font-weight: 600; color: #539AC1; margin-bottom: 0.75rem; margin-top: 1.5rem;">2. The Engineering Gap</h3>
      <p>A Jupyter notebook is not a production system. The jump from "model that works on my laptop" to "model that serves 10,000 requests per second with 99.9% uptime" requires production engineering: containerization, CI/CD, monitoring, rollback strategies, A/B testing infrastructure, and SRE practices.</p>
      <p>Most organizations try to have their data science team do this. That's like asking your architect to also be the general contractor. Different skills, different disciplines.</p>

      <h3 style="font-size: 1.25rem; font-weight: 600; color: #539AC1; margin-bottom: 0.75rem; margin-top: 1.5rem;">3. The Organizational Gap</h3>
      <p>AI changes workflows. It requires new roles, new processes, and new ways of thinking about quality and risk. An AI model that makes decisions needs a governance framework: who's accountable when the model is wrong? How do you handle edge cases? What's the human-in-the-loop process?</p>
      <p>Technical leaders often underestimate this. The technology is the easy part. The organizational change management is where transformation either sticks or unravels.</p>

      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">What "Production-Ready" Actually Means</h2>
      <p>When we work with enterprises on AI transformation at Stratosport, we define production-ready across five dimensions:</p>
      <ul style="list-style: none; padding: 0; margin: 1.5rem 0;">
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">Reliable:</strong> The model serves predictions with defined SLAs — latency, uptime, error rates — just like any other production service.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">Observable:</strong> You can see what the model is doing in real time — input distributions, output confidence, drift detection, and business impact metrics.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">Governable:</strong> There's an audit trail, access controls, versioning, and a clear process for model updates and rollbacks.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">Scalable:</strong> The infrastructure can handle 10x load without re-architecture. Cost scales linearly, not exponentially.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">Maintainable:</strong> Your internal team can operate, retrain, and iterate on the model without external dependency.</span>
        </li>
      </ul>

      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">The Path Forward</h2>
      <p>If you're an enterprise leader sitting on stalled AI initiatives, the fix isn't more data scientists or a bigger model. It's treating AI deployment like what it is: <strong style="color: #A5C7E0;">a production engineering problem</strong> that requires production engineering discipline.</p>
      <p>Start with one high-impact use case. Build the infrastructure properly. Get it to production with the five dimensions above. Then scale horizontally to the next use case.</p>
      <p>The companies that win with AI won't be the ones with the fanciest models. They'll be the ones that operationalize AI with the same engineering rigor they apply to their core platform. That's what we help enterprises do at Stratosport.</p>
    `,
  },
  {
    slug: 'gcc-setup-guide-india-2026',
    title: 'The GCC Setup Playbook: Building an AI-First Capability Center in India',
    excerpt: 'India now hosts 1,600+ GCCs. But most are cost centers, not innovation hubs. Here\'s what it takes to build a GCC that ships production AI from day one.',
    category: 'GCC Strategy',
    author: 'Shubham Agrawal',
    date: 'April 25, 2026',
    dateISO: '2026-04-25',
    readTime: '10 min read',
    tags: ['GCC', 'India', 'AI Engineering', 'Team Building', 'Global Capability Center'],
    content: `
      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2rem; font-family: 'Space Grotesk', sans-serif;">The GCC Landscape Has Changed</h2>
      <p>Five years ago, setting up a Global Capability Center (GCC) in India was primarily about cost arbitrage. You'd hire 50-100 engineers at a fraction of US costs, have them work on maintenance and feature development, and call it a win.</p>
      <p>That playbook is dead.</p>
      <p>In 2026, with <strong style="color: #A5C7E0;">1,600+ GCCs operating in India</strong> and every Fortune 500 competing for the same talent, the question isn't whether to set up in India — it's whether your GCC will be a cost center or an innovation engine. The difference comes down to how you set it up in the first 90 days.</p>

      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">What an AI-First GCC Looks Like</h2>
      <p>An AI-first GCC isn't just a team that "also does AI." It's a capability center designed from the ground up to ship production AI. That means:</p>
      <ul style="list-style: none; padding: 0; margin: 1.5rem 0;">
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">ML Platform from Week One:</strong> Don't let your AI team start with Jupyter notebooks and "we'll build the platform later." Deploy a lightweight ML platform — model registry, experiment tracking, feature store basics — before you write the first line of model code.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">Hybrid Team Structure:</strong> You need ML engineers, not just data scientists. The ideal ratio is roughly 1 data scientist to 2 ML engineers to 1 data engineer. This ensures every model built has a path to production.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">Data Infrastructure First:</strong> The GCC's first project should be building the data platform — not a model. Clean data pipelines, quality monitoring, and a governed data catalog are prerequisites for any AI work.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #539AC1; font-weight: bold;">→</span>
          <span><strong style="color: white;">AI Governance Framework:</strong> Establish model lifecycle policies, bias testing requirements, and approval workflows early. Retrofitting governance onto a running AI system is painful and expensive.</span>
        </li>
      </ul>

      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">The 90-Day Playbook</h2>
      
      <h3 style="font-size: 1.25rem; font-weight: 600; color: #539AC1; margin-bottom: 0.75rem; margin-top: 1.5rem;">Days 1-30: Foundation</h3>
      <p>Entity setup, cloud infrastructure provisioning, CI/CD pipelines, and core tooling. Parallel-track your first 5-8 hires — focus on senior engineers who can set culture. Don't hire junior until you have a strong senior core.</p>

      <h3 style="font-size: 1.25rem; font-weight: 600; color: #539AC1; margin-bottom: 0.75rem; margin-top: 1.5rem;">Days 30-60: First Value</h3>
      <p>Ship something to production. Even if it's small — an internal tool, a data pipeline, an API. This establishes credibility with headquarters and builds the team's shipping muscle. Start the ML platform setup in parallel.</p>

      <h3 style="font-size: 1.25rem; font-weight: 600; color: #539AC1; margin-bottom: 0.75rem; margin-top: 1.5rem;">Days 60-90: Scale Signal</h3>
      <p>Your first AI use case should be in development. Second wave of hiring begins. Engineering practices (code review, testing, observability) should be non-negotiable by now. This is also when you establish your GCC's identity — is it a product engineering hub? An AI Center of Excellence? A platform team? The answer shapes your next 100 hires.</p>

      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">Common Mistakes to Avoid</h2>
      <ul style="list-style: none; padding: 0; margin: 1.5rem 0;">
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #ef4444; font-weight: bold;">✗</span>
          <span><strong style="color: white;">Hiring fast, not right.</strong> 50 mediocre engineers cost more than 15 great ones. Your first 10 hires define your engineering culture for the next 5 years.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #ef4444; font-weight: bold;">✗</span>
          <span><strong style="color: white;">Treating it as an outsourced team.</strong> If your GCC engineers don't have context on the product, customers, and business — they'll build the wrong thing. Invest in knowledge transfer and embedded collaboration.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #ef4444; font-weight: bold;">✗</span>
          <span><strong style="color: white;">Skipping infrastructure.</strong> "We'll set up proper CI/CD later" is the most expensive sentence in GCC history. Do it right from day one.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="color: #ef4444; font-weight: bold;">✗</span>
          <span><strong style="color: white;">No local leadership.</strong> A GCC managed entirely from headquarters will always be a second-class engineering org. Hire a strong local leader who has the authority to make decisions.</span>
        </li>
      </ul>

      <h2 style="font-size: 1.75rem; font-weight: 700; color: white; margin-bottom: 1rem; margin-top: 2.5rem; font-family: 'Space Grotesk', sans-serif;">The Bottom Line</h2>
      <p>The opportunity in India is massive — but it's not about labor arbitrage anymore. It's about accessing a deep talent pool to build capabilities you can't build fast enough at headquarters. If you approach your GCC as an AI-first innovation hub from day one, you'll leapfrog the companies that are still running their India centers like offshore development shops.</p>
      <p>At Stratosport, we've helped enterprises set up GCCs that ship production AI within their first quarter. The key is treating it as a product engineering investment, not a cost-saving exercise.</p>
    `,
  },
];
