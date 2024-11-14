import Scene from "@/components/moon/Scene";

export default function HeaderComponent() {
    return (
        <div className="flex w-5/6 justify-center items-center mx-auto relative h-[700px]">
            <span className="text-white text-[180px] font-thunder font-extrabold lg:absolute lg:left-[140px] lg:top-[80px]">
                <p className="leading-none">FRONT END</p>
                <p className="leading-none pl-20">DEVS.</p>
            </span>
            <div className="w-[510px] h-[510px] z-10">
                <Scene />
            </div>
            <span className="text-white text-[180px] font-thunder font-extrabold lg:absolute lg:right-[140px] lg:bottom-0">
                <p className="leading-none">ENTHUSIAST</p>
            </span>
        </div>
    )
}