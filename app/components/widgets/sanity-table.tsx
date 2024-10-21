import { PreviewProps } from "sanity"

import { TableValueProps } from "@/app/types"
import { TablePreview } from "@sanity/table"

export function TableWidget(props: TableValueProps & PreviewProps) {
  const { table, caption, title, ...rest } = props
  console.log(title)
  const tablePreviewProps = { ...rest, rows: table?.rows || [] }

  return (
    <>
      <div className="px-3">
        <em className="text-sm font-semibold not-italic">{caption ?? "Untitled Table"}</em>
      </div>
      <TablePreview
        {...tablePreviewProps}
        description={caption}
      />
    </>
  )
}
