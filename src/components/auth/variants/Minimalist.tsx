import Link from "next/link"

import { AuthForm } from "@/components/auth/AuthForm"
import { SocialButtons } from "@/components/auth/SocialButtons"
import type { AuthMode } from "@/lib/auth-schema"

export function Minimalist({ mode }: { mode: AuthMode }) {
  const isSignIn = mode === "sign-in"

  return (
    <main className="flex min-h-screen items-start justify-center px-4 pt-24 pb-16 md:pt-32">
      <div className="w-full max-w-[360px]">
        <div className="mb-10 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-sm bg-primary" />
          <span className="text-sm font-normal tracking-wide text-foreground">
            Brand
          </span>
        </div>

        <h1 className="mb-1 text-xl font-normal text-foreground">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          {isSignIn
            ? "Welcome back. Enter your credentials."
            : "Get started in under a minute."}
        </p>

        <AuthForm mode={mode} />

        <div className="mt-6">
          <SocialButtons />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          {isSignIn ? "No account? " : "Have an account? "}
          <Link
            href={isSignIn ? "/sign-up/minimal" : "/sign-in/minimal"}
            className="font-medium text-primary hover:underline"
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </main>
  )
}
