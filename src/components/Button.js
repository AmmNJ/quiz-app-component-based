import createElement from '../lib/createElement'
import './Button.css'

export default function Button(buttonText) {
  const el = createElement('button', {
    className: 'Button',
    innerText: buttonText,
  })
  return el
}
