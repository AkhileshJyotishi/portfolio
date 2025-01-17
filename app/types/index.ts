import { PortableTextBlock } from "sanity"

import { TableRow } from "@sanity/table"

export interface Table {
  rows?: TableRow[]
  title?: string
}

export interface TableValueProps {
  table?: Table
  caption?: string
}

export type ProfileType = {
  _id: string
  fullName: string
  headline: string
  profileImage: {
    image: string
    lqip: string
    alt: string
  }
  shortBio: string
  email: string
  fullBio: PortableTextBlock[]
  location: string
  resumeURL: string
  og: string
  socialLinks: string[]
  skills: string[]
  usage: PortableTextBlock[]
}

export type ProjectType = {
  _id: string
  name: string
  slug: string
  tagline: string
  projectUrl: string
  repository: string
  logo: string
  coverImage: {
    image: string
    alt: string | null
    lqip: string
  }
  description: PortableTextBlock[]
}

export type PostType = {
  _id: string
  _createdAt: string
  _updatedAt?: string
  title: string
  slug: string
  description: string
  canonicalLink?: string
  date?: string
  coverImage: {
    image: string
    lqip: string
    alt: string | null
  }
  tags: string[]
  author: {
    name: string
    photo: {
      image: string
      alt: string
    }
    twitterUrl: string
  }
  body: PortableTextBlock[]
  featured: boolean
  isPublished: boolean
}

export type JobType = {
  _id: string
  name: string
  jobTitle: string
  logo: string
  url: string
  description: string
  startDate: string
  endDate: string
}
