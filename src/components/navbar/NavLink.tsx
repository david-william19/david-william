import Link from "next/link";
import {motion} from "framer-motion";

export default function NavLink({isScrolled}: {isScrolled: boolean}) {
    //className="rounded-full flex-2 backdrop-blur-sm px-[8px] bg-[#7d7d7d]/50 font-sans text-white flex gap-5 py-1.5 list-none mx-auto"

    // class link : className="hover:bg-[#dbdbdb]/25 transition-colors duration-150 ease-in-out px-2.5 py-1.5 rounded-full min-w-[100px] text-center"
    return (
        <motion.div
            className="rounded-full flex-2 backdrop-blur-sm font-sans text-white gap-[50px] flex py-2.5 px-5 list-none mx-auto"
            animate={{
                background: isScrolled ? "rgba(30, 62, 98, 0.2)" : "transparent",
                gap: isScrolled ? "30px" : "50px",
            }}
        >
          <Link href={"/home"}>
          Home
          </Link>
          <Link href={"/project"}>
          Project
          </Link>
          <Link href={"/posts"}>
          Posts
          </Link>
          <Link href={"/about"}>
          About
          </Link>
      </motion.div>
    )
}