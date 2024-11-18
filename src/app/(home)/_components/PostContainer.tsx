import { getPosts, getTags } from "@/services/devtoApi";
import PostCard from "./PostCard";

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
        <div>
        <section className="flex gap-2.5 mb-5">
            <div>
                <h3 className="font-thunder font-bold text-white">Tags</h3>
                <div className="flex gap-2.5">
                    {
                        dataTags.map((tag: any, index: number) => (
                            <span key={index} className="font-thunder text-white">{tag.name}</span>
                        ))
                    }
                </div>
            </div>
        </section>
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
        </div>
    )
}