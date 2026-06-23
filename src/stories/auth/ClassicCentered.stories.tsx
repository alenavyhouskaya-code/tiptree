import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { ClassicCentered } from "@/components/auth/variants/ClassicCentered"

const meta: Meta<typeof ClassicCentered> = {
  title: "Auth/01 — Classic Centered",
  component: ClassicCentered,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof ClassicCentered>

export const SignIn: Story = { args: { mode: "sign-in" } }
export const SignUp: Story = { args: { mode: "sign-up" } }
