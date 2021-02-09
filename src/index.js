import Header from './components/Header'
import HomePage from './components/HomePage/HomePage'
import CreatePage from './components/CreatePage'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'

const header = Header('Quiz App')
const homePage = HomePage()
const navigation = Navigation(onNavigate)
const createPage = CreatePage(onSubmit)
const cards = [
  { question: 'Baz foo bar?', answer: 'foo foo!' },
  { question: 'Foo foo?', answer: 'Baz bar!' },
]

homePage.setCards(cards)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  header.el,
  homePage.el,
  createPage.el,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  homePage.setCards(cards)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.show()
    createPage.hide()
    header.setText('Quiz-App')
  }

  if (text === 'Create') {
    homePage.hide()
    createPage.show()
    header.setText('Create cards')
  }
}
