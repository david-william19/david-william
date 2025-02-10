import ProjectContainer from "./ProjectContainer";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default function ProjectSection() {
    return (
        <div className="w-full px-[150px] h-fit">
                <ProjectContainer />
                <ProjectContainer />
        </div>
    )
}
