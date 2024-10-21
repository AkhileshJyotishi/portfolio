import Image from "next/image"
import Link from "next/link"

import nextjslogo from "@/app/assets/nextjs.svg"
import sanitylogo from "@/app/assets/sanity.png"
import vercellogo from "@/app/assets/vercel.svg"

import UnmountStudio from "../unmount"

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="relative mt-20 min-h-full border-t border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-4 px-6 py-10 md:px-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-x-2 md:flex-row">
            <h3 className="font-inter">Built with:</h3>
            <ul className="mt-3 flex items-center gap-x-2 text-sm text-zinc-400 md:mt-0 dark:text-zinc-600">
              <li>
                <Link
                  href="https://sanity.io"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 text-zinc-600 hover:underline dark:text-white"
                >
                  <Image
                    src={sanitylogo}
                    width={20}
                    height={20}
                    alt="sanity logo"
                  />{" "}
                  Sanity
                </Link>
              </li>
              <li>
                <Link
                  href="https://nextjs.org"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 text-zinc-600 hover:underline dark:text-white"
                >
                  <Image
                    src={nextjslogo}
                    width={20}
                    height={20}
                    alt="nextjs logo"
                  />{" "}
                  Next.js
                </Link>
              </li>
              <li>
                <Link
                  href="https://vercel.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 text-zinc-600 hover:underline dark:text-white"
                >
                  <Image
                    src={vercellogo}
                    width={20}
                    height={20}
                    alt="vercel logo"
                  />{" "}
                  Vercel
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center lg:items-end lg:text-start">
            <small className="text-zinc-500">
              Copyright &copy; Akhilesh Jyotishi {new Date().getFullYear()} All rights Reserved
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  )
}
