import { VariantSwitcher } from "@/components/site/VariantSwitcher"

export default function SignUpLayout({
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
