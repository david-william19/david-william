import axios from "axios";

export async function getAccessToken(clientId: string, clientSecret: string) {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
  
    const response = await axios.post('https://accounts.spotify.com/api/token', params);
    return response.data.access_token;
}
  
  // Function to get currently playing track
export async function getCurrentlyPlaying(accessToken: string, clientId: string, clientSecret: string) {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error: any) {
    //   if (error.response.status === 401) {
    //     // Token expired; get a new one
    //     const newAccessToken = await getAccessToken(clientId, clientSecret);
    //     return getCurrentlyPlaying(newAccessToken, clientId, clientSecret); // Retry
    //   }
      throw error;
    }
}

export const fetchRecentlyPlayed = async () => {
    try {
      const response = await axios.get("/api/spotify/recently-played");
      return response.data;
    } catch (error) {
      return [];
    }
};
