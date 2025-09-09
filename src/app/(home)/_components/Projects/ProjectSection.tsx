import React, { useMemo } from "react";
import ProjectContainer from "./ProjectContainer";
import { Project } from "@/types/Project";

export default function ProjectSection({ projects }: { projects: Project[] }) {

  const projectGrouping = useMemo(() => {
    const groupedProjects: Project[][] = [];
    const chunkSize = 4;

    for (let i = 0; i < projects.length; i += chunkSize) {
      const chunk = projects.slice(i, i + chunkSize)
      groupedProjects.push(chunk);
    }

    return groupedProjects;
  }, [projects]);

  return (
    <div className="container mx-auto pb-24">
        <div className="text-center">
          <h1 className="font-semibold font-thunder text-white text-[80px] leading-none mb-2.5">Projects</h1>
          <p className="text-white mx-auto text-md mb-10 font-poppins">This all came from users, work experience and self-project things that i created for learn</p>
        </div>
      <div className="grid md:grid-cols-3 gap-10">
        {projectGrouping.map((data, index) => {
          return (
              <React.Fragment key={index}>
                {data.map((project, id) => {
                return (
                  <ProjectContainer
                    key={id}
                    id={id}
                    project={project}
                  />
                );
              })}
              </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
