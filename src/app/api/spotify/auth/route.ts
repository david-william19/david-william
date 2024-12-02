export async function GET() {
    const scopes = encodeURIComponent('user-read-recently-played')

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${scopes}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}`

    return Response.redirect(spotifyAuthUrl)
}