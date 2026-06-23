import Link from "next/link"

const VARIANTS = [
  {
    key: "classic",
    label: "Classic Centered",
    description: "Centered card with brand mark on top. The safe default.",
  },
  {
    key: "split",
    label: "Split Screen",
    description:
      "Brand panel on the left, form on the right. Lets the brand color carry weight.",
  },
  {
    key: "minimal",
    label: "Minimalist",
    description:
      "No card, no chrome — just centered fields with lots of whitespace.",
  },
]

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-16">
      <header className="mb-12">
        <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
          Preview
        </p>
        <h1 className="text-2xl font-normal text-foreground">
          Auth Page Variants
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Three sign-in / sign-up designs, same tokens. Pick a direction.
        </p>
      </header>

      <div className="grid gap-4">
        {VARIANTS.map((v) => (
          <article
            key={v.key}
            className="rounded-md border border-border bg-card p-6"
          >
            <h2 className="text-base font-medium text-foreground">{v.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {v.description}
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <Link
                href={`/sign-in/${v.key}`}
                className="text-primary hover:underline"
              >
                Sign in &rarr;
              </Link>
              <Link
                href={`/sign-up/${v.key}`}
                className="text-primary hover:underline"
              >
                Sign up &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

      <footer className="mt-auto pt-12 text-xs text-muted-foreground">
        Style reference:{" "}
        <a
          href="https://althea.tiptreesystems.com/login"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          althea.tiptreesystems.com/login
        </a>
      </footer>
    </main>
  )
}
