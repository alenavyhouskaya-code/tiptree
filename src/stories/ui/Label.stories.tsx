import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  args: { children: "Email" },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-[320px] gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@company.com" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}
