import createElement from '../../lib/createElement'
import './Header.css'

export default function Header(title) {
  const el = createElement('header', {
    className: 'Header',
  })

  setText(title)

  function setText(title) {
    el.innerHTML = `
      <h1 class="Header__title">
        ${title}
      </h1>
    `
  }

  return {
    el,
    setText,
  }
}
