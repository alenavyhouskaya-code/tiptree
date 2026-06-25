"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft } from "lucide-react"

const TABS = [
  { slug: "classic", label: "Classic" },
  { slug: "split", label: "Split" },
  { slug: "minimal", label: "Minimal" },
]

export function VariantSwitcher() {
  const pathname = usePathname() ?? ""
  const isSignUp = pathname.startsWith("/sign-up")
  const base = isSignUp ? "/sign-up" : "/sign-in"
  const active =
    TABS.find((t) => pathname.includes(`/${t.slug}`))?.slug ?? "classic"
  const isClassic = active === "classic"

  const wrapperCls = isClassic
    ? "sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0b0b]/85 backdrop-blur"
    : "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur"

  const backLinkCls = isClassic
    ? "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-neutral-200"
    : "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"

  const tabsContainerCls = isClassic
    ? "flex items-center gap-0.5 rounded-md border border-white/[0.08] bg-[#141414] p-0.5"
    : "flex items-center gap-0.5 rounded-md border border-border bg-card p-0.5"

  const tabCls = (isActive: boolean) =>
    isClassic
      ? [
          "rounded-[5px] px-3 py-1 text-xs transition-colors",
          isActive
            ? "bg-white/[0.06] text-neutral-100"
            : "text-neutral-400 hover:text-neutral-200",
        ].join(" ")
      : [
          "rounded-[5px] px-3 py-1 text-xs transition-colors",
          isActive
            ? "bg-secondary text-foreground"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")

  return (
    <div className={wrapperCls}>
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
        <Link href="/prototypes" className={backLinkCls}>
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to prototypes
        </Link>

        <div className={tabsContainerCls}>
          {TABS.map((t) => (
            <Link
              key={t.slug}
              href={`${base}/${t.slug}`}
              className={tabCls(t.slug === active)}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
