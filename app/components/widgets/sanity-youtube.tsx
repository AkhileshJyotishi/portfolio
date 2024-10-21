import { BiLogoYoutube } from "react-icons/bi"

import getYoutubeId, { YoutubeIframe } from "../../utils"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Allow<T = any> = T | null

export function YoutubeWidget(props: Allow) {
  const { url } = props
  const id = getYoutubeId(url as string)

  return (
    <div className="relative pt-1">
      {url ? (
        <>
          {props.renderDefault(props)}
          <YoutubeIframe videoId={id} />
        </>
      ) : (
        <div className="my-3 flex items-center justify-center gap-x-2">
          <BiLogoYoutube className="text-lg text-[red]" />
          <span>Add YouTube URL</span>
        </div>
      )}
    </div>
  )
}
