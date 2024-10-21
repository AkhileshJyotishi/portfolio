import { revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

import { parseBody } from "next-sanity/webhook"

import { hookSecret } from "@/lib/env.api"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Allow<T = any> = T | null

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string
      slug?: string | undefined
    }>(req, hookSecret)

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 })
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 })
    }

    revalidateTag(body._type)
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    })
  } catch (error: unknown) {
    console.error(error)
    return new Response((error as Allow).message, { status: 500 })
  }
}
