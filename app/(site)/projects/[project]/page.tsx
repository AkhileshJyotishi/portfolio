import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { PortableText } from "next-sanity"
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi"

import { CustomPortableText } from "@/app/components/portable-components/portable-text"
import { Slide } from "@/app/components/slides"
import { ProjectType } from "@/app/types"

import { sanityFetch } from "@/lib/sanity.client"
import { urlFor } from "@/lib/sanity.image"
import { singleProjectQuery } from "@/lib/sanity.query"

type Props = {
  params: {
    project: string
  }
}

const fallbackImage: string = process.env.NEXT_PUBLIC_FALLBACK_IMAGE ?? ""

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  })

  return {
    title: `${project.name} | Project`,
    metadataBase: new URL(`https://akhileshjyotishi.xyz/projects/${project.slug}`),
    description: project.tagline,
    openGraph: {
      images: project.coverImage ? urlFor(project.coverImage.image).width(1200).height(630).url() : fallbackImage,
      url: `https://akhileshjyotishi.xyz/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  }
}

export default async function Project({ params }: Props) {
  const slug = params.project
  const project: ProjectType = await sanityFetch({
    query: singleProjectQuery,
    tags: ["project"],
    qParams: { slug },
  })

  return (
    <main className="mx-auto max-w-6xl px-8 lg:px-16">
      <Slide>
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-start justify-between">
            <h1 className="mb-4 max-w-md font-incognito text-3xl font-black tracking-tight sm:text-5xl">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2">
              <Link
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 rounded-md border border-transparent bg-secondary-bg px-4 py-2 text-zinc-700 duration-200 dark:bg-primary-bg dark:text-white ${
                  !project.projectUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:border-zinc-200 hover:dark:border-zinc-700"
                }`}
              >
                <BiLinkExternal aria-hidden="true" />
                {project.projectUrl ? "Live URL" : "Coming Soon"}
              </Link>

              <Link
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 rounded-md border border-transparent bg-secondary-bg px-4 py-2 text-zinc-700 duration-200 dark:bg-primary-bg dark:text-white ${
                  !project.repository
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:border-zinc-200 hover:dark:border-zinc-700"
                }`}
              >
                <BiLogoGithub aria-hidden="true" />
                {project.repository ? "GitHub" : "No Repo"}
              </Link>
            </div>
          </div>

          <div className="relative h-40 w-full pt-[52.5%]">
            <Image
              className="rounded-xl border border-zinc-100 object-cover dark:border-zinc-800"
              fill
              src={project.coverImage?.image ?? fallbackImage}
              alt={project.coverImage?.alt ?? project.name}
              quality={100}
              placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={project.coverImage?.lqip || ""}
            />
          </div>

          <div className="mt-8 leading-relaxed text-zinc-600 dark:text-zinc-400">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  )
}
