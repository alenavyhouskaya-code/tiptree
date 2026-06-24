"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  FolderClosed,
  Pin,
  Plus,
  Search,
  SquarePen,
} from "lucide-react"

const SAGE_DIM = "#47696b"

const RECENTS: { title: string; slug: string }[] = [
  { title: "Career rebuild and community impact", slug: "career-rebuild" },
  { title: "Helen's professional background docu…", slug: "background" },
  { title: "From law to visual thinking: a career j…", slug: "career-journey" },
  { title: "Deleting website on Vercel", slug: "vercel" },
  { title: "Добавление участников в GitHub team", slug: "github-team" },
]

export default function AltheaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const onHome = pathname === "/althea"

  return (
    <div className="flex h-screen w-full bg-[#0b0b0b] text-neutral-200 antialiased">
      <aside className="hidden w-[240px] shrink-0 flex-col border-r border-white/[0.06] bg-[#0e0e0e] px-3 py-4 md:flex">
        <div className="mb-5 flex items-center justify-between px-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <Search className="h-3.5 w-3.5 text-white/40" />
        </div>

        <nav className="space-y-0.5 text-[13px]">
          <SidebarLink href="/althea" icon={SquarePen} label="Chat" active={onHome} />
          <SidebarLink href="#" icon={Search} label="Search chats" />
          <SidebarLink href="/althea" icon={Plus} label="New chat" />
          <SidebarLink href="#" icon={FolderClosed} label="Projects" />
        </nav>

        <div className="mt-6">
          <SectionLabel>Pinned</SectionLabel>
          <div className="mt-1">
            <SidebarLink href="#" icon={Pin} label="portfolio site" />
          </div>
        </div>

        <div className="mt-5 flex-1 overflow-hidden">
          <SectionLabel>Recents</SectionLabel>
          <ul className="mt-1 space-y-0.5">
            {RECENTS.map((r) => {
              const href = `/althea/c/${r.slug}`
              const isActive = pathname === href
              return (
                <li key={r.slug}>
                  <Link
                    href={href}
                    className={[
                      "block w-full truncate rounded-md px-2 py-1.5 text-left text-[13px]",
                      isActive
                        ? "bg-white/[0.06] text-neutral-100"
                        : "text-neutral-300 hover:bg-white/[0.04]",
                    ].join(" ")}
                  >
                    {r.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-2 border-t border-white/[0.06] pt-3">
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left hover:bg-white/[0.04]">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium text-white"
              style={{ background: SAGE_DIM }}
            >
              H
            </span>
            <span className="text-[13px] text-neutral-200">Helen</span>
            <span className="ml-1 rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-neutral-400 ring-1 ring-white/10">
              Max
            </span>
            <ChevronDown className="ml-auto h-3.5 w-3.5 text-neutral-500" />
          </button>
        </div>
      </aside>

      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-2 text-[11px] uppercase tracking-wider text-neutral-500">
      {children}
    </p>
  )
}

function SidebarLink({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={[
        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px]",
        active
          ? "bg-white/[0.06] text-neutral-100"
          : "text-neutral-300 hover:bg-white/[0.04]",
      ].join(" ")}
    >
      <Icon className="h-4 w-4 text-neutral-400" />
      <span className="truncate">{label}</span>
    </Link>
  )
}
