"use client";

import NavbarComponent from "@/components/navbar";
import HeaderSection from "./_components/HeaderSection";
import PostSection from "./_components/PostSection";
import ProjectSection from "./_components/ProjectSection";
import client from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "@/components/loading";

export default function Home({ projects }: { projects: any }) {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (document !== undefined) {
      document.addEventListener("load", () => {
        setIsLoaded(false);
      });
    }
  }, []);

  return (
    <div>
      <AnimatePresence>{isLoaded && <LoadingScreen />}</AnimatePresence>
      <div className="bg-[#050505]">
        <NavbarComponent />
        <HeaderSection />
        <PostSection />
        <ProjectSection />
      </div>
    </div>
  );
}

export async function getServersideProps() {
  const projects = await client.fetch(PROJECTS_QUERY);
  return {
    props: {
      projects,
    },
  };
}
