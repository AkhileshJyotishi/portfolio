import Image from "next/image"

import { urlFor } from "@/lib/sanity.image"

type imageProp1 = {
  value: {
    alt: string
    caption: string
  }
}

type imageProp = {
  src: object
  alt: string
}

function ImageComponent({ src, alt }: imageProp) {
  return (
    <Image
      className="aspect-auto rounded-sm object-contain object-left-top duration-300"
      src={urlFor(src).url()}
      alt={alt}
      loading="lazy"
      width={1920}
      height={1080}
      placeholder="blur"
      quality={100}
      sizes="100vw"
      blurDataURL={urlFor(src).blur(10).quality(10).url()}
    />
  )
}

export default function SampleImageComponent({ value }: imageProp1) {
  return (
    <figure className="my-10">
      <ImageComponent
        src={value}
        alt={value.alt}
      />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">{value.caption}</figcaption>
      )}
    </figure>
  )
}
