export default function GridCardLoading({ count }: { count: number }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="min-h-[400px] animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
        >
          <div className="h-7 w-2/3 rounded bg-neutral-800/60" />
          <div className="mt-3 h-6 w-1/3 rounded-full bg-neutral-800/50" />
          <div className="mt-5 h-4 w-full rounded bg-neutral-800/40" />
          <div className="mt-2 h-4 w-10/12 rounded bg-neutral-800/40" />
          <div className="mt-5 flex gap-2">
            <div className="h-5 w-14 rounded-full bg-neutral-800/40" />
            <div className="h-5 w-16 rounded-full bg-neutral-800/40" />
            <div className="h-5 w-12 rounded-full bg-neutral-800/40" />
          </div>
        </div>
      ))}
    </div>
  );
}
