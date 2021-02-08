import createElement from '../../lib/createElement'
import './Button.css'

export default function Button(text) {
  return createElement('button', { className: 'Button', innerText: text })
}
