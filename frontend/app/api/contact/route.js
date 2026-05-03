import { NextResponse } from 'next/server';

export async function POST(req) {
  const BACKEND_URL = process.env.BACKEND_URL;
  const API_KEY = process.env.API_KEY;

  if (!BACKEND_URL || !API_KEY) {
    console.error('Missing BACKEND_URL or API_KEY environment variables');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const targetUrl = `${BACKEND_URL}/api/contact`;
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json({ error: 'Failed to process your request. Please try again.' }, { status: 500 });
  }
}
