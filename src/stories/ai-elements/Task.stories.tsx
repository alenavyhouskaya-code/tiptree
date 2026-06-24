import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@/components/ai-elements/task"
import { FileIcon } from "lucide-react"

const meta: Meta<typeof Task> = {
  title: "AI components/Task",
  component: Task,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof Task>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Task defaultOpen>
        <TaskTrigger title="Searched the codebase for `auth-helpers`" />
        <TaskContent>
          <TaskItem>Found 3 files matching the search</TaskItem>
          <TaskItem>
            <TaskItemFile>
              <FileIcon className="size-3" />
              src/lib/auth.ts
            </TaskItemFile>
          </TaskItem>
          <TaskItem>
            <TaskItemFile>
              <FileIcon className="size-3" />
              src/middleware.ts
            </TaskItemFile>
          </TaskItem>
          <TaskItem>
            <TaskItemFile>
              <FileIcon className="size-3" />
              src/app/(auth)/login/page.tsx
            </TaskItemFile>
          </TaskItem>
        </TaskContent>
      </Task>
    </div>
  ),
}

export const Closed: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Task defaultOpen={false}>
        <TaskTrigger title="Indexed 127 files in 2.4s" />
        <TaskContent>
          <TaskItem>Click to expand details…</TaskItem>
        </TaskContent>
      </Task>
    </div>
  ),
}
