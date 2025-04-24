export default function TechStackTag({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`rounded-full w-10 h-10 flex items-center justify-center bg-white/50 ${className}`}>
            {children}
        </div>
    )
}