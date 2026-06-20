import ProjectContainer from "@/app/(home)/_components/Projects/ProjectContainer";
import { Project } from "@/types/Project";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="mb-32 mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, id) => (
        <ProjectContainer key={project._id ?? id} id={id} project={project} />
      ))}
    </div>
  );
}
