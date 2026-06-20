"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { Project } from "@/types/Project";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.08 },
  }),
};

export default function ProjectContainer({
  id = 0,
  project,
}: {
  id?: number;
  project: Project;
}) {
  const image = project.imageUrl || project.headerImageUrl || "";
  const isMobile = (project.deviceType || "").toLowerCase().includes("mobile");
  const color = project.color || "#1DCD9F";

  const tags = (project.techStack ?? [])
    .map((tech) => (typeof tech === "string" ? tech : tech?.label || tech?.value || ""))
    .filter(Boolean)
    .slice(0, 4);

  const hasLink = Boolean(project.urlProject);
  const Card = hasLink ? motion.a : motion.div;
  const linkProps = hasLink
    ? { href: project.urlProject, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Card
      {...linkProps}
      custom={id}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      className="group relative isolate flex min-h-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20"
    >
      {/* color glow sourced from the project's brand color */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ backgroundColor: color }}
      />

      {/* foreground content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-poppins text-2xl font-medium leading-tight text-white">
              {project.name}
            </h3>
            {project.deviceType && (
              <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/80">
                {project.deviceType} Application
              </span>
            )}
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover:bg-[#1DCD9F] group-hover:text-black">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        {project.description && (
          <p className="mt-3 max-w-[85%] font-poppins text-sm leading-relaxed text-white/60 line-clamp-2">
            {project.description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="mt-4 flex max-w-[80%] flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* floating product image — clipped to the card's bottom-right corner */}
      {image && (
        <Image
          src={image}
          alt={project.name || "project preview"}
          width={500}
          height={500}
          loading="lazy"
          decoding="async"
          className={clsx(
            "pointer-events-none absolute z-0 select-none object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]",
            isMobile
              ? "-bottom-20 -right-8 h-[360px] w-[260px] rotate-[6deg]"
              : "-bottom-6 -right-14 h-[230px] w-[340px] -rotate-3"
          )}
        />
      )}
    </Card>
  );
}
