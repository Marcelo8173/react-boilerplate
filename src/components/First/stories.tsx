import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { First } from './index'

export default {
  title: 'Main',
  component: First,
  args: {
    title: 'title default'
  }
} as Meta

export const Basic: Story = (args) => <First {...args} />
Basic.args = {
  title: 'title basic'
}

export const Default: Story = (args) => <First {...args} />
