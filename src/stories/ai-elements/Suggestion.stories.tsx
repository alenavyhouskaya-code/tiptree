import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Suggestion,
  Suggestions,
} from "@/components/ai-elements/suggestion"

const meta: Meta<typeof Suggestion> = {
  title: "AI components/Suggestion",
  component: Suggestion,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof Suggestion>

export const Single: Story = {
  args: {
    suggestion: "Explain quantum computing",
  },
}

export const Row: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Suggestions>
        <Suggestion suggestion="Explain quantum computing" />
        <Suggestion suggestion="Plan a 3-day trip to Tokyo" />
        <Suggestion suggestion="Help me write a cover letter" />
        <Suggestion suggestion="Summarize this article" />
        <Suggestion suggestion="Brainstorm product names" />
      </Suggestions>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Suggestions>
        <Suggestion
          suggestion="What is React?"
          onClick={(s) => alert(`You picked: ${s}`)}
        />
        <Suggestion
          suggestion="How do hooks work?"
          onClick={(s) => alert(`You picked: ${s}`)}
        />
        <Suggestion
          suggestion="Server vs client components"
          onClick={(s) => alert(`You picked: ${s}`)}
        />
      </Suggestions>
    </div>
  ),
}
