export default function ProjectLoader() {
  return (
    <div className="mx-auto max-w-3xl px-8 lg:px-0">
      <div className="mb-6 flex items-center justify-between">
        <span className="h-11 w-52 animate-pulse rounded-sm bg-zinc-200 dark:bg-primary-bg"></span>
        <div className="flex items-center gap-x-2">
          <span className="h-11 w-28 animate-pulse rounded-sm bg-zinc-200 dark:bg-primary-bg"></span>
          <span className="h-11 w-28 animate-pulse rounded-sm bg-zinc-200 dark:bg-primary-bg"></span>
        </div>
      </div>
      <div className="mb-8 h-96 w-full animate-pulse rounded-sm bg-zinc-200 dark:bg-primary-bg"></div>
      <div className="flex flex-col gap-y-2">
        <span className="h-5 w-full animate-pulse rounded-sm bg-zinc-200 dark:bg-primary-bg"></span>
        <span className="h-5 w-full animate-pulse rounded-sm bg-zinc-200 dark:bg-primary-bg"></span>
      </div>
    </div>
  )
}
