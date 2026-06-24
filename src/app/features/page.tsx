import { SiteNav } from "@/components/site/SiteNav"

const FEATURES = [
  {
    title: "Source-anchored AI",
    body: "Every answer carries its citations inline. Designed so trust isn't a footer — it's part of the reading surface.",
  },
  {
    title: "Project context",
    body: "Chats can belong to a project, move between projects, or live on their own. Visible in the header, not buried in settings.",
  },
  {
    title: "Visible reasoning",
    body: "A collapsible thought-process timeline shows how the assistant got there — pulled sources, reframed the question, cross-checked.",
  },
  {
    title: "Quiet motion",
    body: "Easing closer to Linear than to a chatbot. Movement supports reading; it doesn't announce itself.",
  },
]

export default function FeaturesPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-10">
          <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
            Features
          </p>
          <h1 className="text-2xl font-normal text-foreground">
            What these prototypes are trying to demonstrate.
          </h1>
        </header>

        <div className="grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2">
          {FEATURES.map((f) => (
            <article key={f.title} className="bg-card p-6">
              <h2 className="text-sm font-medium text-foreground">{f.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
