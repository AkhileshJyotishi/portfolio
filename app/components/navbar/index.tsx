import Image from "next/image"
import Link from "next/link"

import Logo from "@/app/(site)/icons/logo.png"

import Theme from "../ui/theme-button"
import UnmountStudio from "../unmount"

import MobileMenu from "./mobile-menu"

export default function Navbar() {
  const data = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ]

  return (
    <UnmountStudio>
      <header className="z-30 mb-10 border-b border-zinc-200 px-6 py-6 text-sm md:mb-28 md:px-16 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              width={35}
              height={35}
              alt="logo"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito text-base text-zinc-600 duration-300 hover:text-zinc-900 dark:text-white dark:hover:text-primary-color"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  )
}
