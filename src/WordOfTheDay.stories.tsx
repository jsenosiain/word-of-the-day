import type { Meta, StoryObj } from '@storybook/react'

import { WordOfTheDay } from './WordOfTheDay'

const meta = {
  title: 'WordOfTheDay',
  component: WordOfTheDay,
  parameters: {},
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof WordOfTheDay>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    
  },
}