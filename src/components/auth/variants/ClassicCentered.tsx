import Link from "next/link"
import type { CSSProperties } from "react"

import { AuthForm } from "@/components/auth/AuthForm"
import { SocialButtons } from "@/components/auth/SocialButtons"
import { Separator } from "@/components/ui/separator"
import type { AuthMode } from "@/lib/auth-schema"

const SAGE = "#7ea3a5"

function BrandMark() {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-md text-[13px] font-medium text-neutral-900"
        style={{ background: SAGE }}
      >
        B
      </div>
      <span className="text-[15px] text-neutral-200">Brand</span>
    </div>
  )
}

export function ClassicCentered({ mode }: { mode: AuthMode }) {
  const isSignIn = mode === "sign-in"

  const themeOverrides = {
    "--cta": SAGE,
    "--cta-foreground": "#0b0b0b",
    "--border-strong": "rgba(255,255,255,0.08)",
  } as CSSProperties

  return (
    <main
      className="dark flex min-h-screen items-center justify-center bg-[#0b0b0b] px-4 py-12 text-neutral-200 antialiased"
      style={themeOverrides}
    >
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <BrandMark />
          <p className="text-[13px] text-neutral-400">
            {isSignIn
              ? "Sign in to your account to continue"
              : "Create an account to get started"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
          <AuthForm mode={mode} />

          <div className="my-5 flex items-center gap-3">
            <Separator className="flex-1 bg-white/[0.06]" />
            <span className="text-[11px] uppercase tracking-wider text-neutral-500">
              OR
            </span>
            <Separator className="flex-1 bg-white/[0.06]" />
          </div>

          <SocialButtons />
        </div>

        <p className="mt-6 text-center text-[13px] text-neutral-400">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Link
            href={isSignIn ? "/sign-up/classic" : "/sign-in/classic"}
            className="font-medium text-[#7ea3a5] hover:text-[#9bb9bb]"
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </main>
  )
}
