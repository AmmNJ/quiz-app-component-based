import createElement from '../../lib/createElement'
import Button from '../Button'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
    <label>
      Question:
      <input name="question" placeholder="What is ...?">
    </label>
    <label>
      Answer:
      <input name="answer" placeholder="It is ...!">
    </label>
    `,
  })

  form.append(Button('Create'))

  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elements
    const question = questionInput.value
    const answer = answerInput.value

    onSubmit(question, answer)
    form.reset()
    questionInput.focus()
  })

  return form
}
