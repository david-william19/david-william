import NavbarComponent from "@/components/navbar";
import HeaderSection from "./_components/HeaderSection";
import PostSection from "./_components/Posts/PostSection";
import ProjectSection from "./_components/Projects/ProjectSection";
import client from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/types/Project"
import Footer from "@/components/footer";
import ContactSection from "./_components/Contact/ContactSection";

export default async function Home() {
 const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

 console.log(projects)

return (
    <div> 
      <div className="bg-[#050505]">
        <NavbarComponent />
        <HeaderSection />
        <PostSection />
        <ProjectSection projects={projects} />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
