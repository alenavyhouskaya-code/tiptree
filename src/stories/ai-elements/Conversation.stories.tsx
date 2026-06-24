import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
} from "@/components/ai-elements/conversation"
import {
  Message,
  MessageContent,
} from "@/components/ai-elements/message"
import { MessageCircleIcon } from "lucide-react"

const meta: Meta<typeof Conversation> = {
  title: "AI components/Conversation + Message",
  component: Conversation,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof Conversation>

export const ChatThread: Story = {
  render: () => (
    <div className="h-[480px] w-full max-w-2xl overflow-hidden rounded-lg border">
      <Conversation className="h-full">
        <ConversationContent>
          <Message from="user">
            <MessageContent>What are the main differences between TypeScript and JavaScript?</MessageContent>
          </Message>

          <Message from="assistant">
            <MessageContent>
              TypeScript adds static type checking on top of JavaScript. The three biggest differences are:
              types catch errors at compile time, tooling (autocomplete, refactoring) is richer, and
              you write `.ts` / `.tsx` files that compile down to plain JavaScript.
            </MessageContent>
          </Message>

          <Message from="user">
            <MessageContent>Do I need to learn JavaScript first?</MessageContent>
          </Message>

          <Message from="assistant">
            <MessageContent>
              Yes — TypeScript is a superset, so every concept you learn applies. Start with JavaScript
              fundamentals (variables, functions, async/await), then add types on top.
            </MessageContent>
          </Message>
        </ConversationContent>
      </Conversation>
    </div>
  ),
}

export const EmptyState: Story = {
  render: () => (
    <div className="h-[480px] w-full max-w-2xl overflow-hidden rounded-lg border">
      <Conversation className="h-full">
        <ConversationContent>
          <ConversationEmptyState
            icon={<MessageCircleIcon className="size-12" />}
            title="Start a new conversation"
            description="Ask anything to get started. Your messages will appear here."
          />
        </ConversationContent>
      </Conversation>
    </div>
  ),
}
