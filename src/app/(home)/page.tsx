import HeaderSection from "./_components/HeaderSection";
import PostSection from "./_components/Posts/PostSection";
import ProjectSection from "./_components/Projects/ProjectSection";
import client from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/types/Project"
import ContactSection from "./_components/Contact/ContactSection";

export default async function HomePage() {
 const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

return (
    <div> 
        <HeaderSection />
        <PostSection />
        <ProjectSection projects={projects} />
        <ContactSection />
    </div>
  );
}
