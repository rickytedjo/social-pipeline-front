import { NextResponse } from 'next/server';

export async function GET() {
  const requestUrl = process.env.REQUEST_URL;

  if (!requestUrl) {
    return NextResponse.json({ error: 'REQUEST_URL is not configured.' }, { status: 500 });
  }

  try {
    const response = await fetch(requestUrl, { cache: 'no-store' });
    const payload = await response.json();

    let result = payload?.outputs?.result?.result;
    if (result === undefined) {
      result = payload?.outputs?.result ?? payload;
    }

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown fetch error.' },
      { status: 500 }
    );
  }
}
