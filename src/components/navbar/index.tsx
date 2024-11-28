"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import RecentPlayedModal from "../RecentPlayedModal";

export default function NavbarComponent() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      if(hours < 10 && minutes < 10) {
        const time = `0${hours}:0${minutes}`;
        return setTime(time);
      }
      const time = `${hours}:${minutes}`;
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full lg:pt-5 flex items-center fixed px-32 z-[1000]">
      <Image
        alt="logo-david"
        src={"/images/logo-david.png"}
        width={103}
        height={103}
        className="mr-28"
      />

      <ul className="rounded-full px-[8px] bg-[#c2c2c2] bg-opacity-25 font-sans text-white flex h-fit w-fit list-none mx-auto">
        <li className="px-5 py-2.5">Home</li>
        <li className="px-5 py-2.5">Project</li>
        <li className="px-5 py-2.5">Posts</li>
        <li className="px-5 py-2.5">About</li>
      </ul>

      <div className="flex gap-5">
        {/* time component */}
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="font-thunder font-semibold text-white text-[18px] ml-1.5">
            {time} <span className="text-white opacity-50">(JKT)</span>
          </p>
        </div>
        {/* end time component */}

        {/* spotify status */}
        <RecentPlayedModal />
        {/* end spotify status */}
      </div>
    </nav>
  );
}
