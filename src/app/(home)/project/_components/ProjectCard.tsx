"use client"

import ItemCard from "@/components/ItemCard";
import { Project } from "@/sanity/types";

export default function ProjectCard(data: Project & {imageProject: string}) {
    return (
        <ItemCard>
          {/* image project */}
          <ItemCard.ImageHeader
            src={data.imageProject}
            alt={data.slug!}
          />
          {/* content project */}
          <ItemCard.Body>
            <h3 className="text-white text-lg font-poppins font-semibold mb-2.5">
              {data.name}
            </h3>
                <p className="text-white line-clamp-3">
                {data.description}
            </p>
          </ItemCard.Body>
        </ItemCard>
    )
}