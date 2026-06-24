import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { SiteNav } from "@/components/site/SiteNav"

const PROTOTYPES = [
  {
    href: "/sign-in/classic",
    eyebrow: "Auth · 3 variants",
    title: "Login and Sign up",
    description:
      "Three sign-in / sign-up directions on a shared design system: a centered card, a split-screen, and a minimalist no-chrome layout.",
  },
  {
    href: "/althea/c/career-rebuild",
    eyebrow: "Research assistant",
    title: "Chat — chain of thought",
    description:
      "Dark research-assistant surface with a project breadcrumb, message context menu, and a collapsible thought-process timeline above the answer.",
  },
]

export default function PrototypesPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-10">
          <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
            Prototypes
          </p>
          <h1 className="text-2xl font-normal text-foreground">
            Design surfaces, click-throughable.
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Two prototypes you can open and use. Each one demonstrates a
            different design problem and the tone I bring to it.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {PROTOTYPES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-border-strong"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {p.eyebrow}
              </p>
              <h2 className="mt-2 flex items-center gap-1.5 text-base font-medium text-foreground">
                {p.title}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
