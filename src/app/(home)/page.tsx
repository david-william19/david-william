
import dynamic from "next/dynamic";

const Moon3D = dynamic(() => import("@components/moon/Scene"), {
    ssr: false
})

export default function Page() {
    return (
        <div className="pt-[150px]">
            <div className="w-[500px] h-[500px] mx-auto">
                <Moon3D />
            </div>
        </div>
    );
}