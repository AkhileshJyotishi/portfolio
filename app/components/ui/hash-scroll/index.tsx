import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Allow<T = any> = T | null

type props = {
  text: React.ReactNode
  event?: Allow
}

// export const scrollTop = (header: HTMLHeadingElement) => {
//   header.scrollIntoView({ behavior: "smooth" });
// };

export const slugify = (id: Allow) => {
  if (id) {
    id.toString()
      .toLowerCase()
      .replaceAll(/[^-\w]+/g, "-")
      .replaceAll(/--+/g, "-")
      .replace(/^-|-$/g, "")
  }
  return ""
}

export default function HashScroll({ text, event }: props) {
  return (
    <Link
      onClick={event}
      href={`#${text
        ?.toString()
        .toLowerCase()
        .replaceAll(/[^-\w]+/g, "-")
        .replaceAll(/--+/g, "-")
        .replace(/^-|-$/g, "")}`}
    >
      {text}
    </Link>
  )
}
