import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

import { dataset, projectId } from "./env.api"

const imageBuilder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "production",
})

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source).auto("format").fit("max")
}
