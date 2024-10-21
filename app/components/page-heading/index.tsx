import { Slide } from "../slides"

type HeadingType = {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PageHeading({ title, description, children }: HeadingType) {
  return (
    <header className="mb-10">
      <Slide>
        <h1 className="mb-6 max-w-3xl font-incognito text-3xl font-semibold tracking-tight sm:text-5xl lg:leading-[3.7rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
        {children}
      </Slide>
    </header>
  )
}
