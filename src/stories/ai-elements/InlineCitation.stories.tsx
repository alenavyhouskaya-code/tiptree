import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardTrigger,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselItem,
  InlineCitationCarouselNext,
  InlineCitationCarouselPrev,
  InlineCitationQuote,
  InlineCitationSource,
  InlineCitationText,
} from "@/components/ai-elements/inline-citation"

const meta: Meta<typeof InlineCitation> = {
  title: "AI components/Inline Citation",
  component: InlineCitation,
  parameters: { layout: "padded" },
}

export default meta
type Story = StoryObj<typeof InlineCitation>

export const Default: Story = {
  render: () => (
    <p className="max-w-xl text-base leading-relaxed">
      TypeScript was first released in 2012 by Microsoft and is now one of the
      most popular programming languages in the world
      <InlineCitation>
        <InlineCitationText> </InlineCitationText>
        <InlineCitationCard>
          <InlineCitationCardTrigger
            sources={[
              "https://www.typescriptlang.org/docs/",
              "https://en.wikipedia.org/wiki/TypeScript",
            ]}
          />
          <InlineCitationCardBody>
            <InlineCitationCarousel>
              <InlineCitationCarouselHeader>
                <InlineCitationCarouselPrev />
                <InlineCitationCarouselIndex />
                <InlineCitationCarouselNext />
              </InlineCitationCarouselHeader>
              <InlineCitationCarouselContent>
                <InlineCitationCarouselItem>
                  <InlineCitationSource
                    title="TypeScript Documentation"
                    url="https://www.typescriptlang.org/docs/"
                    description="Official handbook covering syntax, types, and tooling."
                  />
                  <InlineCitationQuote>
                    TypeScript is a strongly typed programming language that
                    builds on JavaScript.
                  </InlineCitationQuote>
                </InlineCitationCarouselItem>
                <InlineCitationCarouselItem>
                  <InlineCitationSource
                    title="TypeScript — Wikipedia"
                    url="https://en.wikipedia.org/wiki/TypeScript"
                    description="History, design, and adoption of the language."
                  />
                  <InlineCitationQuote>
                    First released to the public in October 2012.
                  </InlineCitationQuote>
                </InlineCitationCarouselItem>
              </InlineCitationCarouselContent>
            </InlineCitationCarousel>
          </InlineCitationCardBody>
        </InlineCitationCard>
      </InlineCitation>
      .
    </p>
  ),
}
