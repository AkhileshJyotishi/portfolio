import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { structureTool } from "sanity/structure"

import { codeInput } from "@sanity/code-input"
import { table } from "@sanity/table"
import { visionTool } from "@sanity/vision"

import { schemaTypes } from "./schemaTypes"
export default defineConfig({
  name: "default",
  title: "Sanity Next.js Portfolio",

  projectId: "kr2orimj",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), deskTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})
