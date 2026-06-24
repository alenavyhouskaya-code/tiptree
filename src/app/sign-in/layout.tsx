import { VariantSwitcher } from "@/components/site/VariantSwitcher"

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <VariantSwitcher />
      {children}
    </>
  )
}
