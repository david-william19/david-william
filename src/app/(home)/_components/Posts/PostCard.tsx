import { motion, Variants } from "motion/react"
import TagLabel from "./GenrePostLabel";

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

    const tagPostColorGenerator = (skill: string) => {
        switch(skill) {
            case "javascript" :
                return 'bg-yellow-500/40'
            case "react":
                return 'bg-blue-500/40'
            case "frontend":
                return 'bg-cyan-500/40'
            case "webdev":
                return 'bg-orange-500/40'
            case "typescript":
                return 'bg-blue-300/40'
            case "nextjs":
                return 'bg-black'
            case 'prisma':
                return 'bg-gray-800/40'
            case 'tailwindcss':
                return 'bg-blue-600/40'
            case 'flutter':
                return 'bg-blue-400/40'
            case 'reactnative':
                return 'bg-blue-500/40'
            default :
                return 'bg-gray-500/40'
        }
    }

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
