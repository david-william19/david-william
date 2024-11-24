import { getPosts, getTags } from "@/services/devtoApi";
import PostCard from "./PostCard";
import LabelPost from "./LabelPost";

interface PostDevTo {
    title: string;
    description: string;
    cover_image: string;
    link: string;
}

export default async function PostContainer() {
    const data = await getPosts();
    const dataTags = await getTags();

    return (
        <div className="grid md:grid-cols-2 gap-[67px]">
            {
                data.map((post: PostDevTo, index: number) => (
                    <PostCard 
                        key={index}
                        title={post.title}
                        description={post.description}
                        image={post.cover_image}
                        alt={post.title}
                        link={post.link}
                    />
                ))
            }
        </div>
    )
}