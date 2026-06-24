import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning"

const meta: Meta<typeof Reasoning> = {
  title: "AI components/Reasoning",
  component: Reasoning,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof Reasoning>

const thinkingText = `The user is asking about the relationship between TypeScript and JavaScript.

Key points to cover:
1. TypeScript is a superset — every valid JS file is also valid TS
2. The main value-add is static type checking
3. Tooling (autocomplete, refactoring) is significantly better
4. It compiles down to plain JavaScript, so the runtime is the same

I'll keep the answer concise and focused on practical differences.`

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Reasoning defaultOpen duration={4}>
        <ReasoningTrigger />
        <ReasoningContent>{thinkingText}</ReasoningContent>
      </Reasoning>
    </div>
  ),
}

export const Streaming: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Reasoning isStreaming defaultOpen>
        <ReasoningTrigger />
        <ReasoningContent>{thinkingText}</ReasoningContent>
      </Reasoning>
    </div>
  ),
}

export const Closed: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Reasoning duration={8}>
        <ReasoningTrigger />
        <ReasoningContent>{thinkingText}</ReasoningContent>
      </Reasoning>
    </div>
  ),
}
