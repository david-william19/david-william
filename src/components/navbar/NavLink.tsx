import Link from "next/link";
import {motion} from "motion/react";

export default function NavLink({isScrolled}: {isScrolled: boolean}) {

    return (
        <motion.div
            className="rounded-full flex-2 backdrop-blur-sm font-sans text-white gap-[50px] p-1.5 flex list-none mx-auto"
            animate={{
                background: isScrolled ? "#2525251c" : "transparent",
                gap: isScrolled ? "30px" : "50px",
            }}
        >
          <Link className={`hover:bg-[#1dcd9e2a] transition-all duration-200 py-1.5 px-3 rounded-full`} href={"/"}>
          Home
          </Link>
          <Link className="hover:bg-[#1dcd9e2a] transition-all duration-200 py-1.5 px-3 rounded-full" href={"/project"}>
          Project
          </Link>
          <Link className="hover:bg-[#1dcd9e2a] transition-all duration-200 py-1.5 px-3 rounded-full" href={"/posts"}>
          Posts
          </Link>
          <Link className="hover:bg-[#1dcd9e2a] transition-all duration-200 py-1.5 px-3 rounded-full" href={"/about"}>
          About
          </Link>
      </motion.div>
    )
}
