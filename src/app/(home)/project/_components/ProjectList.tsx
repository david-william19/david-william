import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/sanity/types";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-4 gap-5 mt-10 mb-40">
      {projects.map((data) => {
        const imageProject = data.headerImage ? urlFor(data.headerImage).url() : 'https://placehold.co/600x400/png';

        return (
        <ProjectCard key={data._id} {...data} imageProject={imageProject} />
      )
      })}
    </div>
  );
}
