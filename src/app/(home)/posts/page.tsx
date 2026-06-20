import GridCardLoading from "../project/_components/GridCardLoading";
import PostsList from "./_components/PostsList";
import { Suspense } from "react";

export default async function PostPage() {

  return (
    <div className="container mx-auto pt-12">
      <h1 className="text-white font-thunder text-[50px] leading-none font-semibold">
        Posts
      </h1>
      <p className="text-white mt-2.5 font-poppins">
        Articles that you see is basically from platform dev.to and most of the
        articles is talking about frontend Development
      </p>
      <div className="mb-10 mt-5">
        <Suspense fallback={<GridCardLoading count={4} />}>
        <PostsList />
      </Suspense>
      </div>
    </div>
  );
}
