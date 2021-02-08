import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'
import createElement from './lib/createElement'

const grid = createElement(
  'div',
  { className: 'appGrid' },
  Header('Quiz App', 'May the best win!'),
  Card('Foo bar?', 'Bar baz!'),
  Button('Click me'),
  Button('Hold me')
)

document.body.append(grid)
