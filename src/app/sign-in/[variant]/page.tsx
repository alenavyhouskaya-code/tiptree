import { notFound } from "next/navigation"

import { ClassicCentered } from "@/components/auth/variants/ClassicCentered"
import { SplitScreen } from "@/components/auth/variants/SplitScreen"
import { Minimalist } from "@/components/auth/variants/Minimalist"

const VARIANTS = {
  classic: ClassicCentered,
  split: SplitScreen,
  minimal: Minimalist,
} as const

type VariantKey = keyof typeof VARIANTS

export function generateStaticParams() {
  return (Object.keys(VARIANTS) as VariantKey[]).map((variant) => ({
    variant,
  }))
}

export default async function SignInPage({
  params,
}: {
  params: Promise<{ variant: string }>
}) {
  const { variant } = await params
  const Variant = VARIANTS[variant as VariantKey]
  if (!Variant) notFound()
  return <Variant mode="sign-in" />
}
