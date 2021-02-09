import Card from './components/Card'
import CreateForm from './components/CreateForm'
import Header from './components/Header'
import Navigation from './components/Navigation'
import createElement from './lib/createElement'

const navigation = Navigation(onNavigate)
const form = CreateForm(onSubmit)

const { el: headerEl } = Header('Quiz App', 'May the best win!')

const homePage = createElement(
  'main',
  { className: 'HomePage', hidden: false },
  Card('Foo bar', 'Baz bar!'),
  Card('Foo bar', 'Baz bar!'),
  Card('Foo bar', 'Baz bar!')
)

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  homePage,
  createPage,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  homePage.append(Card(question, answer))
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
  }

  if (text === 'Create') {
    homePage.hidden = true
    createPage.hidden = false
  }
}
