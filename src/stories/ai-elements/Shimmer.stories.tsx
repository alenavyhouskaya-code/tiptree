import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Shimmer } from "@/components/ai-elements/shimmer"

const meta: Meta<typeof Shimmer> = {
  title: "AI components/Shimmer",
  component: Shimmer,
  parameters: { layout: "centered" },
  args: {
    children: "Thinking…",
    duration: 2,
    spread: 2,
  },
  argTypes: {
    children: { control: "text" },
    duration: { control: { type: "number", min: 0.5, max: 6, step: 0.5 } },
    spread: { control: { type: "number", min: 1, max: 8, step: 1 } },
  },
}

export default meta
type Story = StoryObj<typeof Shimmer>

export const Default: Story = {}

export const Fast: Story = {
  args: { children: "Generating response…", duration: 1 },
}

export const Slow: Story = {
  args: { children: "Searching the web…", duration: 4 },
}

export const Heading: Story = {
  args: {
    children: "Composing your next idea",
    as: "h2",
    className: "text-3xl font-semibold",
  },
}
