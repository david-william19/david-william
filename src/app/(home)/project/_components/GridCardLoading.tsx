export default function GridCardLoading({count}: {count: number}) {
    return (
        <div className="grid md:grid-cols-4 gap-5 mt-10">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-[#a6a6a623] rounded-lg overflow-hidden animate-pulse">
          <div className="w-full h-[250px] bg-neutral-800/50" />
          <div className="p-3 space-y-3">
            <div className="h-5 w-2/3 bg-neutral-800/50 rounded" />
            <div className="h-4 w-full bg-neutral-800/40 rounded" />
            <div className="h-4 w-11/12 bg-neutral-800/40 rounded" />
            <div className="h-4 w-9/12 bg-neutral-800/40 rounded" />
          </div>
        </div>
      ))}
    </div>
    )
}