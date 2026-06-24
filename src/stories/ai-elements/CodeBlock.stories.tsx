import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ai-elements/code-block"

const meta: Meta<typeof CodeBlock> = {
  title: "AI components/Code Block",
  component: CodeBlock,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof CodeBlock>

const tsExample = `// Greet the user
function greet(name: string): string {
  return \`Hello, \${name}!\`
}

const message = greet("Alena")
console.log(message)
`

const pyExample = `def fibonacci(n: int) -> int:
    """Return the nth Fibonacci number."""
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


for i in range(10):
    print(fibonacci(i))
`

export const TypeScript: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <CodeBlock code={tsExample} language="typescript" />
    </div>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <CodeBlock code={tsExample} language="typescript">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <CodeBlockFilename>greet.ts</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  ),
}

export const WithLineNumbers: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <CodeBlock code={pyExample} language="python" showLineNumbers>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <CodeBlockFilename>fibonacci.py</CodeBlockFilename>
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton />
          </CodeBlockActions>
        </CodeBlockHeader>
      </CodeBlock>
    </div>
  ),
}
