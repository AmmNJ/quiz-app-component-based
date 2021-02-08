import Card from '.'

export default {
  title: 'Card',
  component: Card,
}

export const base = () =>
  Card(
    'How many planets do we have in our solar system?',
    'In total, we have 8 planets.'
  )
