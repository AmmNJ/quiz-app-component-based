import './Button.css'

export default function Button(buttonText) {
  const el = document.createElement('button')
  el.className = 'Button'
  el.innerText = buttonText
  return el
}
