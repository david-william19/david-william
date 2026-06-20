interface LabelPostProps {
    title: string;
    hexColor?: string;
}

function LabelPost(props: LabelPostProps) {
    return (
        <div className={`bg-white py-1 px-3 rounded-full bg-opacity-25 backdrop-blur-sm`}>
            <p className="text-sm text-white font-thunder font-[200] tracking-wide leading-none">{props.title}</p>
        </div>
    )
}

export default LabelPost;