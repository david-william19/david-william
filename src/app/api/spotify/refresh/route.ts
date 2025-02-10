import axios from "axios";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

  if (!refreshToken) {
    return new Response(JSON.stringify({ error: "Refresh token not available" }), { status: 401 });
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken as string,
        client_id: process.env.SPOTIFY_CLIENT_ID as string,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { access_token, expires_in } = response.data;

    // Update the access token in the cookie
    cookieStore.set("spotify_access_token", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expires_in,
      path: "/",
    });

    return new Response(JSON.stringify({ accessToken: access_token }), { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error refreshing access token:", error.response?.data || error.message);
    } else {
      console.error("Error refreshing access token:", (error as Error).message);
    }
    return new Response("Error refreshing access token", { status: 500 });
  }
}
