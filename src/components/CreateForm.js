import createElement from '../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const el = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
    <label>
      Question:
      <input name="question" placeholder="What is ...?">
    </label>
    <label>
      Answer:
      <input name="question" placeholder="It is ...!">
    </label>
    <label>
      Submit:
      <button>Submit</button>
    </label>
    `,
  })
  return el
}
