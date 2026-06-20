import { motion, Variants } from "motion/react"
import TagLabel from "./GenrePostLabel";
import { tagPostColorGenerator } from "../../../../../utils/tagPostColor";

interface Post {
    title: string;
    description: string;
    image: string;
    alt: string;
    link?: string;
    tags: string[];
    variants?: Variants;
}

export default function PostCard(props: Post) {
    const link = props.link ?? "https://dev.to/davidwilliam_";

    return (
        <a
            href={link}
	>
            {/* image post */}
                <motion.img 
                    src={props.image}
                    alt={props.alt}
                    height={1000}
                    width={1000}
                    className={`rounded-lg object-cover absolute top-0 left-0 h-full w-full`}
                />
            {/* gradient layer */}
                <div
                    className="absolute z-10 inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"
                />
                <div className="absolute z-20 bottom-5 left-5 w-[550px]">
                    <div className="flex gap-2.5">
                    {
                        props.tags.map((data, index) => (
                            <TagLabel key={index} data={data} index={index} color={tagPostColorGenerator(data)} />
                        ))
                    }
                    </div>
                    <h2 className="font-thunder text-white text-[40px] font-extrabold">{props.title}</h2>
                    <p className="font-thunder font-light text-white text-[18px]">{props.description}</p>
                </div>
        </a>
    )
}
