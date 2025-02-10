import HeaderSection from "./_components/HeaderSection";
import PostSection from "./_components/PostSection";
import ProjectSection from "./_components/ProjectSection";
import client from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default function Home({ projects }: { projects: any }) {

    console.log(projects);
    return(
            <div className="bg-[#07131c] h-fit">
                <HeaderSection />
                <PostSection />
                <ProjectSection />
            </div>
    )
}

export async function getServersideProps() {
    const projects = await client.fetch(PROJECTS_QUERY);
    return {
        props: {
            projects
        }
    }
}