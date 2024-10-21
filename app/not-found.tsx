import { Metadata } from "next"

import NotFoundComponent from "./components/not-found"

export const metadata: Metadata = {
  title: "Error 404",
}

export default function NotFound() {
  return (
    <NotFoundComponent
      title="Error 404!"
      description="Oops! This page does not exist on akhileshjyotishi.xyz. While you're here, you can read some featured post below."
    />
  )
}
