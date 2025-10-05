import client from "@/sanity/lib/client"
import { PROJECTS_QUERY } from "@/sanity/lib/queries"
import { Project } from "@/sanity/types"
import { lazy, Suspense } from "react"
import GridCardLoading from "./_components/GridCardLoading"

const ProjectList = lazy(() => import("./_components/ProjectList"))

export default async function ProjectPage() {
    const response = await client.fetch<Project[]>(PROJECTS_QUERY)

    return (
        <div className="container mx-auto pt-12">
            <h1 className="text-white font-thunder text-[50px] leading-none font-semibold">Projects</h1>
            <p className="text-white mt-2.5 font-poppins">Here is my seferall project that i build for my portfolio or also for job purposes</p>
            <Suspense fallback={<GridCardLoading count={4} />}>
                <ProjectList projects={response} />
            </Suspense>
        </div>
    )
}