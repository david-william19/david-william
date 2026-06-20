import client from "@/sanity/lib/client"
import { PROJECTS_QUERY } from "@/sanity/lib/queries"
import { Project } from "@/types/Project"
import { lazy, Suspense } from "react"
import GridCardLoading from "./_components/GridCardLoading"

const ProjectList = lazy(() => import("./_components/ProjectList"))

export default async function ProjectPage() {
    const response = await client.fetch<Project[]>(PROJECTS_QUERY)

    return (
        <div className="container mx-auto px-4 pt-16 pb-32">
            <h1 className="text-white font-thunder text-[64px] leading-none font-semibold">Work</h1>
            <p className="text-white/60 mt-3 font-poppins max-w-xl">A selection of my work &mdash; built for clients, on the job, and for my own learning.</p>
            <Suspense fallback={<GridCardLoading count={6} />}>
                <ProjectList projects={response} />
            </Suspense>
        </div>
    )
}
