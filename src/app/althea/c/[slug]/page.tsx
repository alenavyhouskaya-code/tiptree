"use client"

import Link from "next/link"
import { use, useEffect, useRef, useState } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpenText,
  Brain,
  Check,
  ChevronDown,
  ChevronRight,
  FolderInput,
  FolderMinus,
  Globe,
  MoreHorizontal,
  Pencil,
  Pin,
  Search,
  Share,
  Trash2,
} from "lucide-react"
import {
  AltheaMark,
  AltheaMessage,
  PromptInput,
  SAGE,
  UserMessage,
} from "../../_components"

const TITLES: Record<string, string> = {
  "career-rebuild": "Career rebuild and community impact",
  background: "Helen's professional background",
  "career-journey": "From law to visual thinking: a career journey",
  vercel: "Deleting a website on Vercel",
  "github-team": "Adding members to a GitHub team",
}

export default function AltheaChatDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const title = TITLES[slug] ?? "Chat"

  return (
    <main className="flex flex-1 flex-col">
      <ChatHeader title={title} />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-6 py-10">
          <div className="space-y-8">
            <UserMessage>
              I&apos;m rebuilding my career story after moving from law into
              design. Help me identify the three threads that actually connect
              the two, so I can talk about it without sounding like a list of
              jobs.
            </UserMessage>

            <AltheaMessage>
              <ThoughtTime label="Thought for 12 seconds" />
              <ChainOfThought
                summary="Reasoned across 4 sources"
                steps={[
                  {
                    icon: Brain,
                    label: "Reframed the question",
                    body: "What you&apos;re really asking is: what skills compound across the two careers — not a chronology.",
                  },
                  {
                    icon: Search,
                    label: "Pulled prior context",
                    body: "Read your CV, two case studies, and notes from the Quench engagement.",
                    chips: [
                      "CV (2024)",
                      "Quench SmartCharts case study",
                      "Notes — Jan 2026",
                    ],
                  },
                  {
                    icon: BookOpenText,
                    label: "Cross-checked the frame",
                    body: "Compared to three other lawyer-to-designer transitions on the open web.",
                    chips: [
                      "designnotes.blog · 2 results",
                      "uxcollective · 3 results",
                    ],
                  },
                  {
                    icon: Globe,
                    label: "Synthesized three through-lines",
                    body: "Filtered for threads that show up in both your legal work and your design output, with evidence in your own portfolio.",
                  },
                ]}
              />

              <p>Three threads I&apos;d anchor the story on:</p>
              <ol className="ml-5 list-decimal space-y-2">
                <li>
                  <span className="text-neutral-100">
                    Reading systems before changing them.
                  </span>{" "}
                  Statute first, then a redline. Audit first, then a redesign.
                </li>
                <li>
                  <span className="text-neutral-100">
                    Making the invisible legible.
                  </span>{" "}
                  Plain-language drafting in law became information design in
                  product work.
                </li>
                <li>
                  <span className="text-neutral-100">
                    Earning trust through citation.
                  </span>{" "}
                  Footnoted briefs then; source-anchored AI surfaces now — the
                  thread that makes Quench fit Tiptree.
                </li>
              </ol>
              <p className="text-sm text-neutral-400">
                Sources: your CV, Quench case study, two transition essays.
              </p>
            </AltheaMessage>

            <UserMessage>
              Good. Now tighten thread #3 into one sentence I can open the call
              with.
            </UserMessage>

            <AltheaMessage>
              <ThoughtTime label="Thought for a couple of seconds" />
              <p>
                <span className="text-neutral-100">
                  &ldquo;I&apos;ve spent ten years building trust by showing my
                  sources — first in legal briefs, now in product surfaces that
                  let users see why an AI says what it says.&rdquo;
                </span>
              </p>
              <p className="text-sm text-neutral-400">
                Tight, plain, and it lands the Quench→Althea thread before they
                ask.
              </p>
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

function ChatHeader({ title }: { title: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    function onDown(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [menuOpen])

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-white/[0.06] pl-4 pr-3">
      <div className="flex min-w-0 items-center gap-1">
        <Link
          href="/althea"
          aria-label="Back"
          className="mr-1 flex h-7 w-7 items-center justify-center rounded-md text-neutral-400 hover:bg-white/[0.06] hover:text-neutral-200"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>

        {/* Project / chat tabs */}
        <div className="flex items-center">
          <button className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] text-neutral-400 hover:bg-white/[0.04] hover:text-neutral-200">
            <span
              className="inline-block h-2 w-2 rounded-sm"
              style={{ background: SAGE }}
            />
            portfolio site
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-neutral-600" />
          <div ref={wrapRef} className="relative">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex items-center gap-1 rounded-md bg-white/[0.05] px-2 py-1 text-[12px] text-neutral-100"
            >
              <AltheaMark className="h-3.5 w-3.5" />
              <span className="max-w-[280px] truncate">{title}</span>
              <ChevronDown
                className={[
                  "h-3.5 w-3.5 text-neutral-500 transition-transform",
                  menuOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>
            {menuOpen && <ChatContextMenu />}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[12px] text-neutral-300 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-neutral-100">
          <Share className="h-3.5 w-3.5" />
          Share
        </button>
        <button
          aria-label="More"
          className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-400 hover:bg-white/[0.06] hover:text-neutral-200"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}

function ChatContextMenu() {
  const items = [
    { icon: Pin, label: "Pin" },
    { icon: Pencil, label: "Rename" },
    { icon: FolderInput, label: "Change project", trailing: ChevronRight },
    { icon: FolderMinus, label: "Remove from project" },
  ]
  return (
    <div className="absolute left-0 top-full z-20 mt-1 w-56 rounded-xl border border-white/[0.08] bg-[#171717] py-1 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]">
      {items.map(({ icon: Icon, label, trailing: Trailing }) => (
        <button
          key={label}
          className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-neutral-200 hover:bg-white/[0.05]"
        >
          <Icon className="h-3.5 w-3.5 text-neutral-400" />
          <span className="flex-1">{label}</span>
          {Trailing && <Trailing className="h-3.5 w-3.5 text-neutral-500" />}
        </button>
      ))}
      <div className="my-1 h-px bg-white/[0.06]" />
      <button className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-[13px] text-[#e26a6a] hover:bg-white/[0.05]">
        <Trash2 className="h-3.5 w-3.5" />
        Delete
      </button>
    </div>
  )
}

function ThoughtTime({ label }: { label: string }) {
  return (
    <div className="-mt-1 flex items-center gap-1.5 text-[12px] text-neutral-500">
      <span
        className="inline-block h-1 w-1 rounded-full"
        style={{ background: SAGE }}
      />
      {label}
      <ArrowUpRight className="h-3 w-3" />
    </div>
  )
}

type CoTStep = {
  icon: React.ComponentType<{ className?: string }>
  label: string
  body: string
  chips?: string[]
}

function ChainOfThought({
  summary,
  steps,
}: {
  summary: string
  steps: CoTStep[]
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.015]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left hover:bg-white/[0.03]"
      >
        <Brain
          className="h-3.5 w-3.5"
          style={{ color: SAGE }}
          aria-hidden="true"
        />
        <span className="text-[12px] uppercase tracking-wider text-neutral-400">
          Thought process
        </span>
        <span className="text-[12px] text-neutral-500">· {summary}</span>
        <ChevronRight
          className={[
            "ml-auto h-3.5 w-3.5 text-neutral-500 transition-transform",
            open ? "rotate-90" : "rotate-0",
          ].join(" ")}
        />
      </button>

      {open && (
        <ol className="space-y-4 px-4 pb-4 pt-1">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLast = i === steps.length - 1
            return (
              <li key={i} className="flex gap-3">
                <div className="relative flex flex-col items-center">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/[0.08]"
                    style={{ background: "rgba(126,163,165,0.10)" }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{ color: SAGE }}
                      aria-hidden="true"
                    />
                  </span>
                  {!isLast && (
                    <span className="mt-1 w-px flex-1 bg-white/[0.06]" />
                  )}
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] text-neutral-100">{step.label}</p>
                    {isLast ? null : (
                      <Check
                        className="h-3 w-3 text-neutral-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p
                    className="mt-1 text-[13px] leading-6 text-neutral-400"
                    dangerouslySetInnerHTML={{ __html: step.body }}
                  />
                  {step.chips && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {step.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] text-neutral-400"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
