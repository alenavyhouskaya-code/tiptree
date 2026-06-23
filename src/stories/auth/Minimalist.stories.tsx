import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Minimalist } from "@/components/auth/variants/Minimalist"

const meta: Meta<typeof Minimalist> = {
  title: "Auth/03 — Minimalist",
  component: Minimalist,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof Minimalist>

export const SignIn: Story = { args: { mode: "sign-in" } }
export const SignUp: Story = { args: { mode: "sign-up" } }
