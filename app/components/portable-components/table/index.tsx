import { TableValueProps } from "@/app/types"

export default function Table({ value }: { value: TableValueProps }) {
  const { caption, table } = value
  const tableContent = table?.rows

  if (!tableContent || tableContent.length < 1) {
    return <p>Table Data Missing</p>
  }

  const [tableHeading, ...tableBody] = tableContent.map((t) => t.cells)

  if (!tableHeading || tableBody.length < 1) {
    return <p>Table must have at least one cell.</p>
  }

  return (
    <table className="my-4 w-full border border-zinc-200 text-base dark:border-zinc-800">
      {caption && <caption className="my-1 font-incognito text-lg font-medium">{caption}</caption>}
      <thead className="border-b border-zinc-200 bg-zinc-50 text-left dark:border-zinc-800 dark:bg-[#141414]">
        <tr className="divide-x divide-zinc-200 dark:divide-zinc-800">
          {tableHeading.map((heading) => (
            <th
              key={heading}
              scope="col"
              className="px-3 py-2 font-incognito text-lg font-medium"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((row, index) => (
          <tr
            key={index}
            className="divide-x divide-zinc-200 border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
          >
            {row.map((cell) => (
              <td
                key={cell}
                className="px-3 py-2"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
