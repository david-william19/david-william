"use client"

import { fetchRecentlyPlayed } from "@/services/spotify";
import { useQuery } from "react-query";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

interface ITrack {
    name: string;
    artists: { name: string }[];
    album: { name: string, images: { url: string }[] };
}

export  default function RecentPlayedContent() {
    const { data, isLoading, isError, error } = useQuery(
        ["recentlyPlayed"],
        fetchRecentlyPlayed,
        // {
        //   staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
        // }
      );
      const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    
      if (isLoading) return <p>Loading...</p>;
    
      if (isError) {
        const errorMessage = (error as Error).message;
        return <p>Error: {errorMessage}</p>;
      }
    
      const track: ITrack = data?.items?.[0]?.track;

      const handleRefreshToken = async () => {
        router.push("/api/spotify/auth");
      };

      const handleListenWithMe = async () => {
        router.push(`/listen-with-me?track=${track.name}`);
      }

    return (    
        <div>
      <Image width={500} height={500} className="rounded-lg mb-4" src={track?.album.images[0].url} alt={track?.name} />
      {track ? (
        <div className="text-[#1DB954]">
          <strong>{track.artists.map((artist) => artist.name).join(", ")}</strong>
          <p className="mt-2.5">{track.name}</p>
          <Button onClick={handleListenWithMe} onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} className="group bg-[#10171F] border-none hover:bg-[#1ed760] mt-5 text-black font-sans w-full">
            <Image
              src={isHovering ? "/icons/airpods-open.svg" : "/icons/airpods-close.svg" }
              className="transition-all duration-300"
              alt="airpods"
              width={18}
              height={18}
            />
            <p className="text-white group-hover:text-[#10171F]">Listen on spotify</p>
          </Button>
        </div>
      ) : (
        <div>
          <p className="text-white font-sans text-sm text-center mb-5">Oops, i think something went wrong...</p>
          <Button onClick={handleRefreshToken} className="bg-[#1DB954] hover:bg-[#1ed760] w-full text-black font-sans">Try again</Button>
        </div>
)}
    </div>
    )
}