"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import RecentPlayedModal from "../RecentPlayedModal";
import Link from "next/link";
import {motion} from "framer-motion"

export default function NavbarComponent() {
  const [time, setTime] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav className="w-full pt-2.5 flex items-center fixed px-32 z-[1000]"
    animate={{
      background: isScrolled ? "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0))",
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Image
        alt="logo-david"
        src={"/images/logo-david.png"}
        width={103}
        height={103}
        className="mr-28"
      />

      <div className="rounded-full backdrop-blur-sm px-[8px] bg-[#7d7d7d]/50 font-sans text-white flex gap-5 py-1.5 list-none mx-auto">
          <Link href={"/home"} className="hover:bg-[#dbdbdb]/25 transition-colors duration-150 ease-in-out px-2.5 py-1.5 rounded-full min-w-[100px] text-center">
          Home
          </Link>
          <Link href={"/project"} className="hover:bg-[#dbdbdb]/25 transition-colors duration-150 ease-in-out px-2.5 py-1.5 rounded-full min-w-[100px] text-center">
          Project
          </Link>
          <Link href={"/posts"} className="hover:bg-[#dbdbdb]/25 transition-colors duration-150 ease-in-out px-2.5 py-1.5 rounded-full min-w-[100px] text-center">
          Posts
          </Link>
          <Link href={"/about"} className="hover:bg-[#dbdbdb]/25 transition-colors duration-150 ease-in-out px-2.5 py-1.5 rounded-full min-w-[100px] text-center">
          About
          </Link>
      </div>

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
    </motion.nav>
  );
}
