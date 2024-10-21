import Image from "next/image"

import duckImage from "@/app/assets/searching-duck.gif"

import FeaturedPosts from "../post/featured-posts"

type props = {
  title: string
  description: string
}

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="mx-auto min-h-[60vh] max-w-7xl px-6 md:px-16">
      <header className="max-w-4xl">
        <Image
          width={80}
          height={80}
          src={duckImage}
          alt="searching..."
        />
        <h1 className="mb-3 mt-6 font-incognito text-3xl font-black leading-tight tracking-tight sm:text-6xl lg:leading-[3.7rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      </header>

      <div className="mt-12 grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-2">
        <FeaturedPosts />
      </div>
    </main>
  )
}
