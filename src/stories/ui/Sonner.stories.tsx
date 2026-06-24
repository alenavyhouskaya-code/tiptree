import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

const meta: Meta<typeof Toaster> = {
  title: "Basics/Sonner (Toast)",
  component: Toaster,
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Playground: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <Button onClick={() => toast("Plain toast")}>Plain</Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Saved", { description: "Your changes are live." })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("Heads up", { description: "FYI message." })}
      >
        Info
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast.error("Something broke", {
            description: "Try again in a moment.",
          })
        }
      >
        Error
      </Button>
      <Toaster />
    </div>
  ),
}
