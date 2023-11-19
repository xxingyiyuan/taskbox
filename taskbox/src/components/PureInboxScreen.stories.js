import { setup } from '@storybook/vue3'

import { fireEvent, within } from '@storybook/testing-library'

import { createPinia } from 'pinia'

setup((app) => {
  app.use(createPinia())
})

import PureInboxScreen from './PureInboxScreen.vue'

export default {
  title: 'PureInboxScreen',
  component: PureInboxScreen
}

const Template = (args) => ({
  components: { PureInboxScreen },
  setup() {
    return {
      args
    }
  },
  template: '<PureInboxScreen v-bind="args" />'
})

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = { error: true }

export const WithInteractions = Template.bind({})
WithInteractions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText('pinTask-1'))
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText('pinTask-3'))
}
