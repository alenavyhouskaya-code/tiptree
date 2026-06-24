import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Input> = {
  title: "Basics/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    type: "text",
    placeholder: "you@company.com",
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <Input {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-[320px] gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" {...args} />
    </div>
  ),
}

export const Password: Story = {
  args: { type: "password", placeholder: "••••••••" },
  render: (args) => (
    <div className="w-[320px]">
      <Input {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
  render: (args) => (
    <div className="w-[320px]">
      <Input {...args} />
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="grid w-[320px] gap-2">
      <Label htmlFor="bad">Email</Label>
      <Input id="bad" type="email" defaultValue="not-an-email" aria-invalid />
    </div>
  ),
}
