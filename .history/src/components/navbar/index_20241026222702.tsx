import Image from "next/image";

export default function NavbarComponent() {
    return (
        <nav className="w-full lg:pt-[61px] flex justify-between">
            <Image 
                alt="logo-david"
                src={"/images/logo-david.png"}
                width={103}
                height={103}
            />

            <div className="rounded-full p-">

            </div>
        </nav>
    )
}