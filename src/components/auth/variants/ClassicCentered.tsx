import Link from "next/link"

import { AuthForm } from "@/components/auth/AuthForm"
import { SocialButtons } from "@/components/auth/SocialButtons"
import { Separator } from "@/components/ui/separator"
import type { AuthMode } from "@/lib/auth-schema"

function BrandMark() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-medium">
        B
      </div>
      <span className="text-base font-normal text-foreground">Brand</span>
    </div>
  )
}

export function ClassicCentered({ mode }: { mode: AuthMode }) {
  const isSignIn = mode === "sign-in"

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <BrandMark />
          <p className="text-5xl text-muted-foreground">
            {isSignIn
              ? "Sign in to your account to continue"
              : "Create an account to get started"}
          </p>
        </div>

        <div className="rounded-md border border-border bg-card p-6 shadow-none">
          <AuthForm mode={mode} />

          <div className="my-4 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <SocialButtons />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Link
            href={isSignIn ? "/sign-up/classic" : "/sign-in/classic"}
            className="font-medium text-primary hover:underline"
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </main>
  )
}
