import Image from "next/image";

export default function NavbarComponent() {
    return (
        <nav className="w-full lg:pt-[61px] flex justify-around items-center fixed">
            <Image 
                alt="logo-david"
                src={"/images/logo-david.png"}
                width={103}
                height={103}
            />

            <ul className="rounded-full p-[8px] bg-[#9B95DE bg-opacity-25 flex h-fit list-none">
                <li className="px-5 py-2.5">
                    Home
                </li>
                <li className="px-5 py-2.5">
                    Project
                </li>
                <li className="px-5 py-2.5">
                    Posts
                </li>
                <li className="px-5 py-2.5">
                    About
                </li>
            </ul>

            <p className="text-white">
                test
            </p>
        </nav>
    )
}