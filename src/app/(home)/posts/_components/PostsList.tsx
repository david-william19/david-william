import { getPosts } from "@/services/devtoApi";
import { PostDevTo } from "@/types/Post";
import PostCard from "./PostCard";

export default async function PostsList() {
  const posts = await getPosts();

  return (
    <div className="grid md:grid-cols-4 gap-5 mt-10">
      {posts.map((data: PostDevTo) => {
        const imagePosts =
          data.cover_image !== null
            ? data.cover_image
            : "https://placehold.co/600x400/png";

        return (
         <PostCard key={data._id} {...data} imagePosts={imagePosts} />
        );
      })}
    </div>
  );
}
