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
        </div>

        <div className="text-sm mt-10 flex justify-between items-center">
          {/* quick link */}
          <div className="flex text-white gap-5 flex-1 justify-center-center">
            <Link href={"project"}>Project</Link>
            <Link href={"project"}>About</Link>
            <Link href={"project"}>Post</Link>
            <Link href={"linkedin"}>Linkedin</Link>
            <Link href={"resume"}>Get Resume</Link>
          </div>

          <p className="text-xs text-right text-[#dcdcdc]">
            &copy; david stuff 2025
          </p>
        </div>
      </div>
    </div>
  );
}
