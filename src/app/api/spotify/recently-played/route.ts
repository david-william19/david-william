import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const access_token = searchParams.get('access_token');

  if (!access_token) {
    return NextResponse.json({ error: 'Access token is missing or invalid' }, { status: 400 });
  }

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    if (response.status === 200 && response.data) {
      return NextResponse.json({
        track: response.data.item.name,
        artist: response.data.item.artists.map((artist: { name: string }) => artist.name).join(', '),
        link: response.data.item.external_urls.spotify
      });
    } else {
      return NextResponse.json({ message: 'No track currently playing' }, { status: 204 });
    }
  } catch (error) {
    console.error('Error fetching currently playing track:', error);
    return NextResponse.json({ error: 'Failed to fetch currently playing track' }, { status: 500 });
  }
}