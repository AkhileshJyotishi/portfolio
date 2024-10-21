import Image from "next/image"

import { JobType } from "@/app/types"
import { formatDate } from "@/app/utils"

import { sanityFetch } from "@/lib/sanity.client"
import { jobQuery } from "@/lib/sanity.query"

import { Slide } from "../slides"
import RefLink from "../ui/ref-link"

export default async function Job() {
  const job: JobType[] = await sanityFetch({
    query: jobQuery,
    tags: ["job"],
  })

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="mb-4 font-incognito text-4xl font-bold tracking-tight">Work Experience</h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {job.map((data) => (
            <div
              key={data._id}
              className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-9 before:top-[5rem] before:h-[calc(100%-70px)] before:w-[1px] before:bg-zinc-200 lg:gap-x-6 dark:before:bg-zinc-800"
            >
              <RefLink
                href={data.url}
                className="relative grid min-h-[80px] min-w-[80px] place-items-center overflow-clip rounded-md border border-zinc-200 bg-secondary-bg p-2 dark:border-zinc-800 dark:bg-primary-bg"
              >
                <Image
                  src={data.logo}
                  className="object-cover duration-300"
                  alt={`${data.name} logo`}
                  width={50}
                  height={50}
                />
              </RefLink>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{data.name}</h3>
                <p>{data.jobTitle}</p>
                <time className="mt-2 text-sm uppercase tracking-widest text-zinc-500">
                  {formatDate(data.startDate)} -{" "}
                  {data.endDate ? (
                    formatDate(data.endDate)
                  ) : (
                    <span className="text-tertiary-color dark:text-primary-color">Present</span>
                  )}
                </time>
                <p className="my-4 tracking-tight text-zinc-600 dark:text-zinc-400">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  )
}
