import Link from "next/link"

import Favicon from "@/app/utils/favicon"
import { PortableTextComponents } from "@portabletext/react"

import RefLink from "../../ui/ref-link"

export const CustomPortableTextFavicon: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="relative mb-2 mt-6 inline-block font-incognito text-2xl font-semibold tracking-tight before:absolute before:-left-5 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-2xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:inline dark:before:text-zinc-500">
        <Link href={`#${children?.toString().toLowerCase().replaceAll(" ", "-")}`}>{children}</Link>
      </h3>
    ),
    normal: ({ children }) => <p className="mb-6 mt-2">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <RefLink
          href={value?.href}
          className="inline-flex items-center justify-start gap-x-1 font-medium text-blue-500 underline dark:text-blue-400"
        >
          <Favicon
            domain={value?.href}
            alt={value?.href}
          />
          {children}
        </RefLink>
      )
    },
  },
  list: {
    bullet: ({ children }) => <ul className="ml-2 mt-2 list-none text-zinc-600 dark:text-zinc-400">{children}</ul>,
  },
  listItem: { bullet: ({ children }) => <li className="mb-4">{children}</li> },
}
