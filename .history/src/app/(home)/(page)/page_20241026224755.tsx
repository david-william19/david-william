import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-radial-space">
            <Image 
                src={"/images/"}
            />
            Hello world
        </div>
    );
}