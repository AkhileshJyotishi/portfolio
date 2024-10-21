import Image from "next/image"

import duckImage from "@/app/assets/searching-duck.gif"

type stateType = {
  value?: string
  icon?: React.ReactNode
  title?: string
  message?: string
}

export default function EmptyState({ value, title, icon, message }: stateType) {
  return (
    <div className="flex w-full flex-col items-center rounded-md border border-dashed border-zinc-200 bg-zinc-100 px-6 py-8 text-center dark:border-zinc-700 dark:bg-primary-bg">
      <div className="mb-6 text-4xl text-zinc-500">
        {icon || (
          <Image
            width={80}
            height={80}
            src={duckImage}
            alt="Yellow duck searching"
          />
        )}
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight">{title ?? `No ${value} Found`}</h3>
      <p className="mb-6 ml-4 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
        {message ??
          `There are no ${value && value.toLowerCase()} available at this time. Check back
        again.`}
      </p>
    </div>
  )
}
