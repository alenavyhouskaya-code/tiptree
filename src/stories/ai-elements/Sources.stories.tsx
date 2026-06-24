import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources"

const meta: Meta<typeof Sources> = {
  title: "AI components/Sources",
  component: Sources,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof Sources>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Sources defaultOpen>
        <SourcesTrigger count={3} />
        <SourcesContent>
          <Source
            href="https://www.typescriptlang.org/docs/"
            title="TypeScript Handbook"
          />
          <Source
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            title="MDN: JavaScript guide"
          />
          <Source
            href="https://github.com/microsoft/TypeScript/wiki/FAQ"
            title="TypeScript FAQ — Microsoft"
          />
        </SourcesContent>
      </Sources>
    </div>
  ),
}

export const Closed: Story = {
  render: () => (
    <div className="w-full max-w-xl">
      <Sources>
        <SourcesTrigger count={5} />
        <SourcesContent>
          <Source href="https://example.com/1" title="Source 1" />
          <Source href="https://example.com/2" title="Source 2" />
          <Source href="https://example.com/3" title="Source 3" />
          <Source href="https://example.com/4" title="Source 4" />
          <Source href="https://example.com/5" title="Source 5" />
        </SourcesContent>
      </Sources>
    </div>
  ),
}
