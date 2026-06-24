"use client"

import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
  AltheaMark,
  AltheaMessage,
  PromptInput,
  UserMessage,
} from "./_components"

export default function AltheaChatPage() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-white/[0.06] px-6">
        <div className="flex items-center gap-2">
          <AltheaMark className="h-4 w-4" />
          <span className="text-[13px] text-neutral-300">
            Career rebuild and community impact
          </span>
        </div>
        <button className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-neutral-400 hover:bg-white/[0.06] hover:text-neutral-200">
          <span>Opus 4.8</span>
          <span className="text-neutral-500">High</span>
          <ChevronDown className="h-3.5 w-3.5 text-neutral-500" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-6 py-10">
          <div className="space-y-8">
            <UserMessage>
              Help me think through how to position my portfolio site for the
              Tiptree intro call on Friday.
            </UserMessage>

            <AltheaMessage>
              <p>
                Happy to. Before we shape the narrative, two anchors worth
                agreeing on:
              </p>
              <ol className="ml-5 list-decimal space-y-1.5">
                <li>
                  The Quench SmartCharts case study is your strongest
                  trust-through-citation example — it maps directly to
                  Althea&apos;s Ask → Understand → Collaborate flow.
                </li>
                <li>
                  Tiptree&apos;s tone is academic restraint. So the site should
                  read as a research artifact, not a showreel.
                </li>
              </ol>
              <p>Want me to draft a 3-screen walkthrough you can talk to?</p>
            </AltheaMessage>

            <UserMessage>
              Yes — and keep it tight, I&apos;ve got 30 minutes total.
            </UserMessage>

            <AltheaMessage>
              <p>
                Got it. Here&apos;s a 6-minute spine, leaving room for their
                questions:
              </p>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>
                  <span className="text-neutral-200">Opening (1m)</span> —
                  one-line framing of your design lens.
                </li>
                <li>
                  <span className="text-neutral-200">Quench deep-dive (3m)</span>{" "}
                  — the citation surface and how it earns user trust.
                </li>
                <li>
                  <span className="text-neutral-200">Process slide (2m)</span> —
                  how you move from research to spec.
                </li>
              </ul>

              <Link
                href="/althea/c/career-rebuild"
                className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-300 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-neutral-100"
              >
                See how I built this
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </AltheaMessage>
          </div>
        </div>
      </div>

      <div className="shrink-0 px-6 pb-6">
        <div className="mx-auto w-full max-w-3xl">
          <PromptInput />
          <p className="mt-2 text-center text-[11px] text-neutral-600">
            Althea cites Lacuna and the open web. Verify before you publish.
          </p>
        </div>
      </div>
    </main>
  )
}
