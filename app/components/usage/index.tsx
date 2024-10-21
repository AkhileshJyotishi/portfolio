import { ProfileType } from "@/app/types"
import { PortableText } from "@portabletext/react"

import { sanityFetch } from "@/lib/sanity.client"
import { profileQuery } from "@/lib/sanity.query"

import { CustomPortableTextFavicon } from "../portable-components/portable-favicon"

export default async function Usage() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  })

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">Usage</h2>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          Tools, technologies and gadgets I use on a daily basis but not limited to.
        </p>
      </div>
      {profile.map((textBlock, id) => (
        <PortableText
          key={id}
          value={textBlock.usage}
          components={CustomPortableTextFavicon}
        />
      ))}
    </section>
  )
}
