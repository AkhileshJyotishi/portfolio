import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import PageHeading from "@/app/components/page-heading"
import { Slide } from "@/app/components/slides"
import EmptyState from "@/app/components/ui/empty-state"
import type { ProjectType } from "@/app/types"

import { sanityFetch } from "@/lib/sanity.client"
import { projectsQuery } from "@/lib/sanity.query"

export const metadata: Metadata = {
  title: "Akhilesh Jyotishi | Project",
  metadataBase: new URL("https://akhileshjyotishi.xyz"),
  description: "Explore projects built by Akhilesh Jyotishi",
  openGraph: {
    title: "Projects | Akhilesh Jyotishi",
    url: "https://akhileshjyotishi.xyz",
    description: "Explore projects built by Akhilesh Jyotishi",
    images: "",
  },
}

export default async function Project() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  })

  return (
    <main className="mx-auto max-w-7xl px-6 md:px-16">
      <PageHeading
        title="Projects"
        description="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved."
      />

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-x-4 rounded-lg border border-transparent bg-zinc-50 p-4 hover:border-zinc-200 dark:bg-primary-bg dark:hover:border-zinc-700"
              >
                {project.logo ? (
                  <Image
                    src={project.logo}
                    width={60}
                    height={60}
                    alt={project.name}
                    className="rounded-md bg-zinc-100 p-2 dark:bg-zinc-800"
                  />
                ) : (
                  <div className="rounded-lg border border-transparent bg-zinc-50 p-2 text-3xl hover:border-zinc-200 dark:bg-primary-bg dark:hover:border-zinc-700">
                    🪴
                  </div>
                )}
                <div>
                  <h2 className="mb-1 text-lg tracking-wide">{project.name}</h2>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{project.tagline}</div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  )
}
