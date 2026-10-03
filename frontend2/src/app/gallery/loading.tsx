export default function GalleryLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="h-10 w-48 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-4 w-80 max-w-full animate-pulse rounded bg-muted/70" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="aspect-[4/3] animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    </div>
  );
}
