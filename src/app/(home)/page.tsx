import { useRef } from "react";
import HeaderSection from "./_components/HeaderSection";
import PostSection from "./_components/PostSection";
import ProjectSection from "./_components/ProjectSection";
import ContainerAnimation from "./_components/containerAnimation";

export default function Home() {
    // const containerRef = useRef<HTMLDivElement>(null);

    return(
        <div className="bg-[#07131c]">
            <ContainerAnimation>
            <HeaderSection />
            </ContainerAnimation>
            <ContainerAnimation>
            <PostSection />
            </ContainerAnimation>
            <ContainerAnimation>
            <ProjectSection />
            </ContainerAnimation>
        </div>
    )
}