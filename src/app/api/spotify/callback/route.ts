import axios from "axios";
import { cookies } from "next/headers";

let accessToken: string;
let refreshToken: string;

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code: code as string,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI as string,
        client_id: process.env.SPOTIFY_CLIENT_ID as string,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    const cookieStore = cookies();
    cookieStore.set("spotify_access_token", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expires_in, // Token lifespan
      path: "/",
    });

    // Optional: Store refresh token (if needed)
    cookieStore.set("spotify_refresh_token", refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 365 * 24 * 60 * 60, // 1 year (adjust as needed)
      path: "/",
    });

    return Response.redirect("/");
    return Response.redirect("/");
  } catch (error) {
    console.error("Error exchanging code for tokens:", error);
    return new Response("Error exchanging code for tokens", { status: 500 });
  }
}

export async function getAccessToken() {
  if (!accessToken) {
    accessToken = await refreshAccessToken().then((token) => token as string);

    return accessToken;
  }
  return accessToken;
}

export async function refreshAccessToken() {
  if (!refreshToken) return null;

  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken as string,
        client_id: process.env.SPOTIFY_CLIENT_ID as string,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    accessToken = tokenResponse.data.access_token;
    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
}
