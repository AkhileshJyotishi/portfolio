export default function getYoutubeId(url: string) {
  const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm
  const match = regex.exec(url)

  if (!match) {
    return null
  }
  return match[3]
}

export const YoutubeIframe = ({ videoId }: { videoId: string | null }) => {
  if (!videoId) {
    return null
  }
  return (
    <iframe
      className="aspect-video"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

export function readTime(words: string) {
  // Remove whitespaces
  const trimString = words.trim()

  // Split the string into an array of words using spaces as the delimiter
  const wordsArray = trimString.split(/\s+/)
  const wordCount = wordsArray.length

  const avgReadTime: number = 185
  return `${(wordCount / avgReadTime).toFixed(0)} min`
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
