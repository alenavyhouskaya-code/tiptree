import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  PromptInputButton,
} from "@/components/ai-elements/prompt-input"
import { PaperclipIcon, MicIcon } from "lucide-react"

const meta: Meta<typeof PromptInput> = {
  title: "AI components/Prompt Input",
  component: PromptInput,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof PromptInput>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <PromptInput onSubmit={(message) => alert(`Submitted: ${message.text}`)}>
        <PromptInputBody>
          <PromptInputTextarea placeholder="What would you like to know?" />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit />
        </PromptInputFooter>
      </PromptInput>
    </div>
  ),
}

export const WithTools: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <PromptInput onSubmit={(message) => alert(`Submitted: ${message.text}`)}>
        <PromptInputBody>
          <PromptInputTextarea placeholder="Ask me anything…" />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputButton aria-label="Attach file">
              <PaperclipIcon className="size-4" />
            </PromptInputButton>
            <PromptInputButton aria-label="Voice input">
              <MicIcon className="size-4" />
            </PromptInputButton>
          </PromptInputTools>
          <PromptInputSubmit />
        </PromptInputFooter>
      </PromptInput>
    </div>
  ),
}

export const Streaming: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <PromptInput onSubmit={() => undefined}>
        <PromptInputBody>
          <PromptInputTextarea
            defaultValue="Tell me about the history of typography"
            placeholder="What would you like to know?"
          />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit status="streaming" onStop={() => undefined} />
        </PromptInputFooter>
      </PromptInput>
    </div>
  ),
}
