import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#252525] pb-14 pt-20">
      <div className="container mx-auto">
        {/* quick link and logo */}
        <div className="flex justify-between">
          <div className="max-w-[500px]">
            <h1 className="text-white font-semibold text-[32px] mb-12 font-thunder flex-1">
              DW
            </h1>
            <p className="text-white text-xs">
              Crafted with care by David — a frontend developer passionate about
              building responsive, user-friendly, and modern web applications.
              Focused on clean code, great user experience, and continuous
              learning.
            </p>
          </div>

          <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-2.5 text-white flex-1 justify-center-center">
            <Link href={"/project"}>Work</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/posts"}>Posts</Link>
            <Link href={"/resume"}>Get Resume</Link>
          </div>

          <div className="text-left flex flex-col gap-2.5">
            <a href="https://www.linkedin.com/in/davidwilliamdacosta" target="_blank">
              <p className="text-white">Twitter / X</p>
            </a>
            <a href="https://www.instagram.com/davdwilliam_" target="_blank">
              <p className="text-white">Instagram</p>
            </a>
            <a href="https://www.linkedin.com/in/davidwilliamdacosta" target="_blank">
              <p className="text-white">Linkedin</p>
            </a>
            <a href="mailto:davidwilldacosta@gmail.com" target="_blank">
              <p className="text-white">Email</p>
            </a>
          </div>
          </div>
        </div>

        <div className="text-sm mt-10 flex justify-between items-center">
          {/* quick link */}

          <p className="text-xs text-right text-[#dcdcdc]">
            &copy; david stuff 2025
          </p>
        </div>
      </div>
    </div>
  );
}
