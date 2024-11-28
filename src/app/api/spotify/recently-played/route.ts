import axios from "axios";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  let accessToken = cookieStore.get("spotify_access_token")?.value;

  if (!accessToken) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const response = await axios.get("https://api.spotify.com/v1/me/player/recently-played", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching recently played tracks:", error.response?.data || error.message);
    } else {
      console.error("Error fetching recently played tracks:", error);
    }
    return new Response("Error fetching tracks", { status: 500 });
  }
}
