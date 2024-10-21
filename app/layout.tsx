import { Inter } from "next/font/google"
import Script from "next/script"

import type { Metadata } from "next"

import { gitlabmono, incognito } from "./assets/font"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import { Providers } from "./providers/theme-provider"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akhileshjyotishi.xyz"),
  title: "Akhilesh Jyotishi | Portfolio",
  description:
    "Akhilesh Jyotishi is a Software Developer  who is passionate about building solutions and contributing to open source communities",
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: "https://www.akhileshjyotishi.xyz",
    title: "Akhilesh Jyotishi | Portfolio",
    locale: "en-US",
    description:
      "Akhilesh Jyotishi is a Software Developer  who is passionate about building solutions and contributing to open source communities",
    siteName: "Akhilesh Jyotishi | Portfolio",
    images: [
      {
        url: "/favicon.ico",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} min-h-screen bg-white text-zinc-700 dark:bg-zinc-900 dark:text-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  )
}
