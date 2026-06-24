import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Checkbox> = {
  title: "Basics/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
  args: {
    disabled: false,
    defaultChecked: false,
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const Checked: Story = { args: { defaultChecked: true } }

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="remember" {...args} />
      <Label htmlFor="remember">Keep me signed in</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="d1" disabled />
        <Label htmlFor="d1">Disabled unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="d2" disabled defaultChecked />
        <Label htmlFor="d2">Disabled checked</Label>
      </div>
    </div>
  ),
}
