import Link from "next/link"

import { AuthForm } from "@/components/auth/AuthForm"
import { SocialButtons } from "@/components/auth/SocialButtons"
import { Separator } from "@/components/ui/separator"
import type { AuthMode } from "@/lib/auth-schema"

export function SplitScreen({ mode }: { mode: AuthMode }) {
  const isSignIn = mode === "sign-in"

  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <aside className="hidden bg-primary px-12 py-16 text-primary-foreground md:flex md:flex-col md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-sm font-medium">
            B
          </div>
          <span className="text-base font-normal">Brand</span>
        </div>

        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-normal leading-snug">
            Calm, considered tools for serious work.
          </h2>
          <p className="text-sm text-white/80">
            One account, everywhere you need it. Built for teams that prefer
            substance over noise.
          </p>
        </div>

        <p className="text-xs text-white/60">
          &copy; {new Date().getFullYear()} Brand. All rights reserved.
        </p>
      </aside>

      <div className="flex items-center justify-center px-6 py-12 md:px-16">
        <div className="w-full max-w-[440px]">
          <div className="mb-8">
            <h1 className="text-xl font-normal text-foreground">
              {isSignIn ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {isSignIn
                ? "Enter your details to continue"
                : "It only takes a minute"}
            </p>
          </div>

          <AuthForm mode={mode} />

          <div className="my-4 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <SocialButtons />

          <p className="mt-6 text-sm text-muted-foreground">
            {isSignIn ? "New here? " : "Already have an account? "}
            <Link
              href={isSignIn ? "/sign-up/split" : "/sign-in/split"}
              className="font-medium text-primary hover:underline"
            >
              {isSignIn ? "Create an account" : "Sign in instead"}
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
