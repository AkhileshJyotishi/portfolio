import type { ProfileType } from "@/app/types"

import { sanityFetch } from "@/lib/sanity.client"
import { profileQuery } from "@/lib/sanity.query"

import HeroSvg from "./(site)/icons/HeroSvg"
import Job from "./components/job"
import { Slide } from "./components/slides"
import Social from "./components/social"

const page = async () => {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  })

  return (
    <main className="mx-auto mt-20 max-w-7xl px-6 md:px-16 lg:mt-32">
      <section className="mb-16 flex flex-col items-start justify-between gap-x-12 xl:flex-row xl:items-center xl:justify-center">
        {profile &&
          profile.map((data) => (
            <div
              key={data._id}
              className="max-w-2xl lg:max-w-2xl"
            >
              <Slide>
                <h1 className="mb-6 min-w-full font-incognito text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
                  {data.headline}
                </h1>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{data.shortBio}</p>
              </Slide>
              <Slide delay={0.1}>
                <Social type="social" />
              </Slide>
            </div>
          ))}
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>
      <Job />
    </main>
  )
}

export default page
