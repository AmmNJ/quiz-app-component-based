import Button from '.'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Agree')
export const longText = () => Button('Long text for this button')
