import { BiLinkExternal, BiSolidQuoteRight } from "react-icons/bi"

import { TableValueProps } from "@/app/types"
import getYoutubeId, { YoutubeIframe } from "@/app/utils"
import { PortableTextComponents } from "@portabletext/react"

import HashScroll from "../../ui/hash-scroll"
import RefLink from "../../ui/ref-link"
import CodeBlock from "../code-block"
import PortableImage from "../portable-image"
import Table from "../table"
export const CustomPortableText: PortableTextComponents = {
  types: {
    image: PortableImage,
    code: CodeBlock,
    youtube: ({ value }: { value: { url: string } }) => {
      const id = getYoutubeId(value.url)
      return <YoutubeIframe videoId={id} />
    },
    customTable: ({ value }: { value: TableValueProps }) => <Table value={value} />,
  },

  block: {
    normal: ({ children }) => <p className="mb-6 mt-2">{children}</p>,
    h2: ({ children }) => (
      <h2
        id={children // TODO: Export slugify code to reusable function
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="relative my-8 block font-incognito text-3xl font-bold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden hover:before:sm:inline-block lg:text-4xl lg:before:-left-5 lg:before:text-2xl dark:text-zinc-100 dark:before:text-zinc-500"
      >
        <HashScroll text={children} />
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="relative my-6 block font-incognito text-2xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden hover:before:sm:inline-block lg:text-3xl lg:font-bold lg:before:-left-5 lg:before:text-2xl dark:text-zinc-100 dark:before:text-zinc-500"
      >
        <HashScroll text={children} />
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={children
          ?.toString()
          .toLowerCase()
          .replaceAll(/[^-\w]+/g, "-")
          .replaceAll(/--+/g, "-")
          .replace(/^-|-$/g, "")}
        className="relative mb-2 mt-4 inline-block font-incognito text-xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden hover:before:sm:inline-block lg:before:-left-6 lg:before:text-2xl dark:text-zinc-100 dark:before:text-zinc-500"
      >
        <HashScroll text={children} />
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative my-8 overflow-hidden rounded-md border border-zinc-200 p-4 pr-12 text-lg tracking-tight lg:py-6 lg:pl-6 dark:border-zinc-800">
        <BiSolidQuoteRight
          className="absolute -right-5 -top-7 -rotate-12 text-7xl text-zinc-200 dark:text-zinc-800"
          aria-hidden="true"
        />
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => <em className="font-incognito font-medium italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold text-zinc-700 dark:text-zinc-300">{children}</strong>,
    link: ({ children, value }) => {
      return (
        <RefLink
          href={value?.href}
          className="text-blue-500 hover:underline dark:text-blue-400"
        >
          {children}{" "}
          <BiLinkExternal
            className="inline"
            aria-hidden="true"
          />
        </RefLink>
      )
    },
    code: ({ children }) => (
      <code className="rounded-sm bg-secondary-bg px-1 py-[0.15rem] font-incognito font-medium text-pink-500 dark:bg-primary-bg dark:text-zinc-200">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="ml-5 mt-5 list-[square]">{children}</ul>,
    number: ({ children }) => <ol className="ml-5 mt-5 list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-4">{children}</li>,
    number: ({ children }) => <li className="mb-4">{children}</li>,
  },
}
