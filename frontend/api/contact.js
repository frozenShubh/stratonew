/**
 * Vercel Serverless Function — Contact Form Proxy
 *
 * This runs server-side on Vercel, so the BACKEND_URL and API_KEY
 * are never exposed to the browser. The frontend calls /api/contact
 * on the same domain; this function forwards it to the real backend.
 */

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const BACKEND_URL = process.env.BACKEND_URL;
  const API_KEY = process.env.API_KEY;

  if (!BACKEND_URL || !API_KEY) {
    console.error('Missing BACKEND_URL or API_KEY environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const targetUrl = `${BACKEND_URL}/api/contact`;
    console.log(`[Proxy Debug] Target URL: ${targetUrl}`);
    console.log(`[Proxy Debug] API Key starts with: ${API_KEY ? API_KEY.substring(0, 4) : 'none'}`);
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ error: 'Failed to process your request. Please try again.' });
  }
}
