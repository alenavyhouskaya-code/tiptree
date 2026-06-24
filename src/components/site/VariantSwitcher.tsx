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

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4">
        <Link
          href="/prototypes"
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to prototypes
        </Link>

        <div className="flex items-center gap-0.5 rounded-md border border-border bg-card p-0.5">
          {TABS.map((t) => {
            const isActive = t.slug === active
            return (
              <Link
                key={t.slug}
                href={`${base}/${t.slug}`}
                className={[
                  "rounded-[5px] px-3 py-1 text-xs transition-colors",
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {t.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
