import Image from "next/image"
import Link from "next/link"

import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi"

import { CustomPortableText } from "@/app/components/portable-components/portable-text"
import { Slide } from "@/app/components/slides"
import RefLink from "@/app/components/ui/ref-link"
import Usage from "@/app/components/usage"
import type { ProfileType } from "@/app/types"
import { PortableText } from "@portabletext/react"

import { sanityFetch } from "@/lib/sanity.client"
import { profileQuery } from "@/lib/sanity.query"

export default async function About() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  })

  return (
    <main className="relative mx-auto max-w-3xl px-6 md:px-16 lg:max-w-7xl">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-custom">
              <div className="order-2 lg:order-none">
                <Slide>
                  <h1 className="mb-8 basis-1/2 font-incognito text-3xl font-semibold tracking-tight sm:text-5xl lg:leading-tight">
                    I&apos;m {data.fullName}. I live in {data.location}, where I design the future.
                  </h1>
                  <div className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <PortableText
                      value={data.fullBio}
                      components={CustomPortableText}
                    />
                  </div>
                </Slide>
              </div>

              <aside className="order-none mb-12 flex flex-col gap-y-8 justify-self-start lg:order-1 lg:justify-self-center">
                <Slide delay={0.1}>
                  <div className="sticky top-10">
                    <Image
                      className="mb-4 max-h-96 min-h-96 rounded-2xl bg-[#1d1d20] bg-top object-cover"
                      src={data.profileImage.image}
                      width={400}
                      height={400}
                      quality={100}
                      alt={data.profileImage.alt}
                      blurDataURL={data.profileImage.lqip}
                      priority
                    />

                    <div className="flex flex-col gap-y-4 text-center">
                      <div className="flex items-center gap-x-3">
                        <RefLink
                          href="https://www.craft.me/s/WQpQF3jrPIodXp"
                          className="flex basis-[90%] items-center justify-center gap-x-2 rounded-md border border-transparent bg-zinc-100 py-2 text-center font-incognito text-lg font-semibold hover:border-zinc-200 dark:bg-primary-bg dark:hover:border-zinc-700"
                        >
                          View Resume <BiLinkExternal className="text-base" />
                        </RefLink>
                        <Link
                          href={`${data.resumeURL}?dl=${data.fullName}-resume`}
                          className="flex basis-[10%] items-center justify-center rounded-md border border-transparent bg-zinc-100 py-3 text-center text-lg text-secondary-color hover:border-zinc-200 hover:underline dark:bg-primary-bg dark:text-primary-color dark:hover:border-zinc-700"
                          title="Download Resume"
                        >
                          <BiSolidDownload
                            className="text-lg"
                            aria-label="Download Resume"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <ul>
                    <li>
                      <Link
                        href={`mailto:${data.email}`}
                        className="flex items-center gap-x-2 duration-300 hover:text-purple-400"
                      >
                        <BiEnvelope className="text-lg" />
                        {data.email}
                      </Link>
                    </li>
                  </ul>
                </Slide>
              </aside>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="mb-4 text-4xl font-semibold">Expertise</h2>
              <p className="max-w-lg text-zinc-400">
                I&apos;ve spent few years working on my skills. In no particular order, here are a few of them.
              </p>

              <ul className="mt-8 flex flex-wrap items-center gap-3">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="rounded-md border border-transparent bg-[#1d1d20] px-2 py-1 hover:border-zinc-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
            <Slide delay={0.14}>
              <Usage />
            </Slide>
          </div>
        ))}
    </main>
  )
}
