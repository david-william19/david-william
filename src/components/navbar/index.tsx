"use client";

import { useEffect, useState } from "react";
// import RecentPlayedModal from "../RecentPlayedModal";
import {motion} from "framer-motion"
import NavLink from "./NavLink";

export default function NavbarComponent() {
  const [time, setTime] = useState<string | null>("00:00");
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
      if (window.scrollY > 20) {
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
    <motion.nav className="w-full pt-5 flex items-center sticky top-0 px-32 z-20"
    animate={{
      background: isScrolled ? "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))" : "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0))",
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h1 className="text-white font-semibold text-[32px] font-thunder flex-1">DW</h1>

      <NavLink isScrolled={isScrolled} />

      <div className="flex gap-5 flex-1 justify-end">
        {/* time component */}
        <div className="flex justify-center relative">
          <motion.svg
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
          </motion.svg>
              <motion.p animate={{
                opacity: 1,
                transition: {
                  duration: 0.5
                }
              }} className="font-thunder font-semibold text-white text-[18px] ml-1.5">
                {time} <span className="text-white opacity-50">(JKT)</span>
              </motion.p>
        </div>
        {/* end time component */}

        {/* spotify status */}
        {/* <RecentPlayedModal /> */}
        {/* end spotify status */}
      </div>
    </motion.nav>
  );
}
