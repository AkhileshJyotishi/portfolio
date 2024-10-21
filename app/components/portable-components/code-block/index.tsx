import { Refractor, registerLanguage } from "react-refractor"
import bash from "refractor/lang/bash"
import css from "refractor/lang/css"
import graphql from "refractor/lang/graphql"
import java from "refractor/lang/java"
import js from "refractor/lang/javascript"
import json from "refractor/lang/json"
import jsx from "refractor/lang/jsx"
import markdown from "refractor/lang/markdown"
import html from "refractor/lang/markup"
import python from "refractor/lang/python"
import scss from "refractor/lang/scss"
import sql from "refractor/lang/sql"
import tsx from "refractor/lang/tsx"
import ts from "refractor/lang/typescript"
import yaml from "refractor/lang/yaml"

import Clipoboard from "../../ui/clipboard"

// Supported languages: https://prismjs.com/#supported-languages
registerLanguage(js)
registerLanguage(ts)
registerLanguage(jsx)
registerLanguage(tsx)
registerLanguage(sql)
registerLanguage(bash)
registerLanguage(markdown)
registerLanguage(css)
registerLanguage(scss)
registerLanguage(python)
registerLanguage(html)
registerLanguage(yaml)
registerLanguage(graphql)
registerLanguage(json)
registerLanguage(java)

type codeTypes = {
  value: {
    code: string
    language: string
    filename?: string | null
  }
}

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex translate-y-2 items-center justify-between rounded-t-lg border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-[#141414]">
        {value.filename && <p className="text-sm">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <Refractor
        language={value.language ?? "jsx"}
        value={value.code}
        className="rounded-b-lg border-x border-b border-zinc-200 text-sm tracking-normal dark:border-zinc-800"
      />
    </div>
  )
}
