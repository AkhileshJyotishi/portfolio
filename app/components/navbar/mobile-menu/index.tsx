"use client"
import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { HiBeaker, HiOutlineX, HiUser } from "react-icons/hi"
import { RxHamburgerMenu } from "react-icons/rx"

import Logo from "@/app/(site)/icons/logo.png"

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false)
  const data = [
    {
      title: "About",
      href: "/about",
      icon: HiUser,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: HiBeaker,
    },
  ]

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto"
      } else {
        document.body.style.overflow = "hidden"
      }
      return !status
    })
  }

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="rounded-md border border-zinc-200 bg-secondary-bg p-2 md:hidden dark:border-zinc-800 dark:bg-primary-bg"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] md:hidden dark:bg-zinc-900 ${
          navShow ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className="mt-6 flex items-center justify-between px-8">
          <Link
            href="/"
            onClick={onToggleNav}
          >
            <Image
              src={Logo}
              width={35}
              height={35}
              alt="logo"
            />
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className={`rounded-full border border-zinc-200 bg-secondary-bg p-2 duration-500 md:hidden dark:border-zinc-800 dark:bg-primary-bg ${
              !navShow ? "-rotate-[360deg]" : null
            }`}
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>
        <nav className="mt-6 flex flex-col">
          {data.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group flex items-center gap-x-2 p-6 font-incognito text-lg font-semibold shadow-line-light dark:shadow-line-dark"
              onClick={onToggleNav}
            >
              <link.icon
                className="text-zinc-500 duration-300 group-hover:text-zinc-800 group-hover:dark:text-white"
                aria-hidden="true"
              />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
