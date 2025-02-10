import { motion, Variants } from "motion/react"
import TagLabel from "./GenrePostLabel";

interface Post {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    link?: string;
    tags: string[];
    variants?: Variants;
    onHoverChange: (id: number | null) => void;
    isAnyHovered: boolean;
    isHovered: boolean;
}

export default function PostCard(props: Post) {
    const link = props.link ?? "https://dev.to/davidwilliam_";

    const variantsCard = {
        open: {
            scale: 1
        },
        close: {
            scale: 1.2
        }
    }

    const tagPostColorGenerator = (skill: string) => {
        switch(skill) {
            case "javascript" :
                return 'bg-yellow-500'
            case "react":
                return 'bg-blue-500'
            case "frontend":
                return 'bg-cyan-500'
            case "webdev":
                return 'bg-orange-500'
            case "typescript":
                return 'bg-blue-300'
            case "nextjs":
                return 'bg-black'
            case 'prisma':
                return 'bg-gray-800'
            case 'tailwindcss':
                return 'bg-blue-600'
            case 'flutter':
                return 'bg-blue-400'
            case 'reactnative':
                return 'bg-blue-500'
            default :
                return 'bg-gray-500'
        }
    }

    return (
        <motion.a 
            initial={{ width: props.isHovered ? "70%" : props.isAnyHovered ? "10%" : "30%" }}
            animate={{ width: props.isHovered ? "70%" : props.isAnyHovered ? "10%" : "30%" }}
            whileHover={{
                width: "70%",
                transformOrigin: 'left center',
                boxShadow: "0 0 10px 0 #c7c7c7",
            }}
            transition={{
                type: "spring",
                duration: 0.5,
                ease: "easeInOut",
            }}
            variants={variantsCard}
            href={link} 
            className={`gap-1 min-h-[500px] p-5 rounded-lg overflow-hidden relative`}
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
                <motion.div 
                    // initial={{ opacity: 0 }}
                    // whileHover={{ opacity: 1 }}
                    // transition={{ duration: 0.5 }}
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
        </motion.a>
    )
}