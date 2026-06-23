import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { SplitScreen } from "@/components/auth/variants/SplitScreen"

const meta: Meta<typeof SplitScreen> = {
  title: "Auth/02 — Split Screen",
  component: SplitScreen,
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof SplitScreen>

export const SignIn: Story = { args: { mode: "sign-in" } }
export const SignUp: Story = { args: { mode: "sign-up" } }
