"use client"

// import { NextStudio } from "next-sanity/studio"
import { CircularSpinner } from "@/app/components/ui/circular-spinner"
const NextStudio = dynamic(() => import("next-sanity/studio").then((mod) => mod.NextStudio), {
  ssr: false,
  loading: () => <CircularSpinner />,
})
import config from "@/sanity.config"
import dynamic from "next/dynamic"

export default function Studio() {
  return <NextStudio config={config} />
}
