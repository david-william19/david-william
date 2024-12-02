import HeaderSection from "./_components/HeaderSection";
import PostSection from "./_components/PostSection";
import ProjectSection from "./_components/ProjectSection";

export default function Home() {
    // const containerRef = useRef<HTMLDivElement>(null);

    return(
            <div className="bg-[#07131c]">
                <HeaderSection />
                <PostSection />
                <ProjectSection />
            </div>
    )
}