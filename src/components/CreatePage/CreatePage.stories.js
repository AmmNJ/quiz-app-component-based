import CreatePage from './CreatePage'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Pages/CreatePage',
  component: CreatePage,
}

export const base = () => CreatePage(action('onSubmit')).el
