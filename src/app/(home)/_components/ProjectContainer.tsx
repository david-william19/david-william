import Image from "next/image";

export default function ProjectContainer() {
    return (
        <div className="flex justify-between gap-5">
            <div className="text-white flex-1">
                <span className="border border-white rounded-full w-fit py-[13px] px-[24px] flex">
                <Image src={"/icons/phone.svg"} alt="phone" width={18} height={18} className="mr-2.5" />
                <h3 className="font-sans">
                    MOBILE
                </h3>
                </span>
                <h2 className="uppercase font-thunder font-extrabold text-[80px]">PPID kemendag</h2> 
                <p className="font-sans text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Est enim mus non elementum nulla mauris duis enim. Semper in aliquet sit duis nam tellus 
                </p>
            </div>
            <div className="w-1/2 flex justify-center">
                <Image src="/images/project/ppid-kemendag.png" alt="ppid-kemendag" width={280} height={300} />
            </div>

            <div className="self-end flex-1">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 w-full">
                    <p className="text-center font-thunder font-[500] text-white text-[32px]">Tech Stack</p>
                </div>
            </div>
        </div>
    )
}