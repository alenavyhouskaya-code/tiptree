"use client"

import { ArrowUp, ChevronDown, Clock, Plus } from "lucide-react"

export const SAGE = "#7ea3a5"

export function PromptInput({
  placeholder = "Reply…",
  thinking = false,
}: {
  placeholder?: string
  thinking?: boolean
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#141414] shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
      <textarea
        rows={1}
        placeholder={placeholder}
        className="block w-full resize-none rounded-2xl bg-transparent px-5 pt-4 pb-2 text-[15px] leading-6 text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
      />
      <div className="flex items-center justify-between px-3 pb-3">
        <div className="flex items-center gap-1">
          <IconBtn label="Add attachment">
            <Plus className="h-4 w-4" />
          </IconBtn>
          <button
            aria-label="Extended thinking"
            title="Extended thinking  ⇧⌘E"
            className={[
              "flex h-8 w-8 items-center justify-center rounded-full",
              thinking
                ? "text-neutral-900"
                : "text-neutral-400 hover:bg-white/[0.06] hover:text-neutral-200",
            ].join(" ")}
            style={thinking ? { background: SAGE } : undefined}
          >
            <Clock className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-white/[0.06]">
            <span>Sonnet 4.6</span>
            <span className="text-neutral-500">Low</span>
            <ChevronDown className="h-3.5 w-3.5 text-neutral-500" />
          </button>
          <button
            aria-label="Send"
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-neutral-900"
            style={{ background: SAGE }}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function IconBtn({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  return (
    <button
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-white/[0.06] hover:text-neutral-200"
    >
      {children}
    </button>
  )
}

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-[#1a1a1a] px-4 py-2.5 text-[15px] leading-6 text-neutral-100">
        {children}
      </div>
    </div>
  )
}

export function AltheaMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div
        className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{ background: "rgba(126,163,165,0.12)" }}
      >
        <AltheaMark className="h-3.5 w-3.5" />
      </div>
      <div className="w-full min-w-0 space-y-3 text-[15px] leading-7 text-neutral-200">
        {children}
      </div>
    </div>
  )
}

export function AltheaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 1.5c.5 4.2 2.3 6 6.5 6.5-4.2.5-6 2.3-6.5 6.5-.5-4.2-2.3-6-6.5-6.5 4.2-.5 6-2.3 6.5-6.5Z"
        fill={SAGE}
      />
      <path
        d="M19 14c.2 1.7.9 2.4 2.6 2.6-1.7.2-2.4.9-2.6 2.6-.2-1.7-.9-2.4-2.6-2.6 1.7-.2 2.4-.9 2.6-2.6Z"
        fill={SAGE}
      />
    </svg>
  )
}
