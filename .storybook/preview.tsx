import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        order: ['Page examples', 'Basics', 'AI components'],
      },
    },
  },
}

export default preview
