import author from "./author"
import blockContent from "./block-content"
import job from "./job"
import post from "./post"
import profile from "./profile"
import project from "./project"
import { table } from "./table"
import { youtube } from "./youtube"

export const schemaTypes = [
  profile,
  job,
  project,
  post,
  author,

  // Reference types
  blockContent,
  youtube,
  table,
]
