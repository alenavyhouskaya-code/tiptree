import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool"

const meta: Meta<typeof Tool> = {
  title: "AI components/Tool",
  component: Tool,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof Tool>

export const Completed: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Tool defaultOpen>
        <ToolHeader
          type="dynamic-tool"
          state="output-available"
          toolName="getWeather"
        />
        <ToolContent>
          <ToolInput input={{ city: "Tokyo", units: "celsius" }} />
          <ToolOutput
            output={
              <pre className="text-sm">
                {`{ "temperature": 18, "condition": "Cloudy", "humidity": 64 }`}
              </pre>
            }
            errorText={undefined}
          />
        </ToolContent>
      </Tool>
    </div>
  ),
}

export const Running: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Tool defaultOpen>
        <ToolHeader
          type="dynamic-tool"
          state="input-available"
          toolName="searchDocs"
        />
        <ToolContent>
          <ToolInput input={{ query: "typescript generics" }} />
        </ToolContent>
      </Tool>
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Tool defaultOpen>
        <ToolHeader
          type="dynamic-tool"
          state="output-error"
          toolName="fetchUser"
        />
        <ToolContent>
          <ToolInput input={{ userId: "u_42" }} />
          <ToolOutput
            output={undefined}
            errorText="User not found (404)"
          />
        </ToolContent>
      </Tool>
    </div>
  ),
}
