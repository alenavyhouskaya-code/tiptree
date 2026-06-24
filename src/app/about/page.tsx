import { SiteNav } from "@/components/site/SiteNav"

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
            About project
          </p>
          <h1 className="text-2xl font-normal text-foreground">
            A small portfolio surface for talking through design work.
          </h1>
        </header>

        <div className="space-y-6 text-[15px] leading-7 text-foreground">
          <p>
            This site is a place to walk through a few design prototypes in
            their own browser, instead of in flat screenshots. Each one targets
            a specific surface — an authentication flow, a research-assistant
            chat — and tries to stay close to the tone of the product it would
            belong to.
          </p>
          <p>
            The aesthetic is restrained on purpose: near-black on white, sage
            as the accent, Inter, hairline borders. The intent is calm,
            considered tools rather than showreel polish.
          </p>
          <p className="text-sm text-muted-foreground">
            Built by Helen, prototyped in Next.js. Source on{" "}
            <a
              href="https://github.com/alenavyhouskaya-code/tiptree"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </main>
    </>
  )
}
