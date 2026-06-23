import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Separator } from "@/components/ui/separator"

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: () => (
    <div className="w-[320px] text-sm">
      <p>Above the line</p>
      <Separator className="my-3" />
      <p>Below the line</p>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[320px]">
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">OR</span>
        <Separator className="flex-1" />
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-12 items-center gap-4 text-sm">
      <span>Item A</span>
      <Separator orientation="vertical" />
      <span>Item B</span>
      <Separator orientation="vertical" />
      <span>Item C</span>
    </div>
  ),
}
