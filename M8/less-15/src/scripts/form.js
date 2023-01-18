import { form, list } from './domElements'
import { inLocalStorage } from './getInitialValues'

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const { value } = event.target.elements.nameInput

	inLocalStorage.push(value)

	localStorage.setItem('todo', JSON.stringify(inLocalStorage))

	list.insertAdjacentHTML(
		'beforeend',
		`<li>
			<p>Todo ${value}</p>
		</li>`
	)
})
