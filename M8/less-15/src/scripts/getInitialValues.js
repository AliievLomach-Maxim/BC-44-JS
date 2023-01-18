import { list } from './domElements'

export const inLocalStorage = []

export default function getInitialValues() {
	if (localStorage.getItem('todo')) {
		JSON.parse(localStorage.getItem('todo')).map((item) => {
			list.insertAdjacentHTML(
				'beforeend',
				`<li>
				<p>Todo ${item}</p>
			</li>`
			)
			inLocalStorage.push(item)
		})
	}
}
