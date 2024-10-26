import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-radial-space">
            <Image 
                className="w-full"
                src={"/images/stars.svg"}
                alt="stars"
                width={1920}
                height={1080}
            />
            Hello world
        </div>
    );
}