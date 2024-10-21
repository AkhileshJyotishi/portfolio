import Image from "next/legacy/image"
import Link from "next/link"

import { PostType } from "@/app/types"

import { sanityFetch } from "@/lib/sanity.client"
import { postsQuery } from "@/lib/sanity.query"

export default async function FeaturedPosts({ params }: { params?: string }) {
  const featuredPosts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["Post"],
  })

  return (
    <>
      {featuredPosts.map((post) =>
        post.featured !== true || post.isPublished !== true ? null : (
          <article
            key={post._id}
            className={`mb-4 ${post.slug === params ? "hidden" : "flex flex-col lg:flex-row"}`}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-secondary-bg p-5 dark:border-zinc-800 dark:bg-primary-bg"
            >
              <Image
                src={post.coverImage?.image}
                className="rounded-md bg-zinc-100 object-cover dark:bg-zinc-800"
                alt={post.coverImage?.alt || post.title}
                width={400}
                height={230}
                placeholder={post.coverImage ? "blur" : "empty"}
                blurDataURL={post.coverImage?.lqip || ""}
                quality={100}
                loading="lazy"
              />
              <div className="max-w-lg">
                <h2 className="mb-4 max-w-sm text-lg tracking-tight">{post.title}</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {post.description.slice(0, 80).padEnd(83, "...")}
                </p>
              </div>
            </Link>
          </article>
        )
      )}
    </>
  )
}
