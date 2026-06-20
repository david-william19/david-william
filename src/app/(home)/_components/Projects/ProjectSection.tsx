import ProjectContainer from "./ProjectContainer";
import { Project } from "@/types/Project";

export default function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="mb-3 font-thunder text-[80px] font-semibold leading-none text-white">
          Projects
        </h2>
        <p className="font-poppins text-base text-white/60">
          A mix of client work, on-the-job builds, and self-initiated projects I
          made to keep learning.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, id) => (
          <ProjectContainer key={project._id ?? id} id={id} project={project} />
        ))}
      </div>
    </section>
  );
}
