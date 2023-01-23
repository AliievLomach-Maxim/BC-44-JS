import './style.css'
import './scripts/fetch'
// import './scripts/promise'
// import './scripts/date'
// import getInitialValues from './scripts/getInitialValues'
// import './scripts/domElements'
// import './scripts/form'

// 1 -  input  for text
// 2 - input type number
// 3 - create button
// 4 - save text from input to localStorage
// 4.1 - key: value from input type number
// 4.2 - value: value from input type text

// const input1 = document.createElement('input')
// const input2 = document.createElement('input')
// const btn = document.createElement('button')
// btn.textContent = 'Add'

// const form = document.createElement('form')

// form.append(input1, input2, btn)

// const body = document.querySelector('body')
// body.prepend(form)

// form.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	const { children } = event.target

// 	localStorage.setItem(`${children[0].value}`, `${children[1].value}`)
// })

// const input1 = document.createElement('input')

// const btn = document.createElement('button')
// btn.textContent = 'Add'

// const form = document.createElement('form')

// form.append(input1, btn)

// const main = document.querySelector('.main')
// main.append(form)

// const list = document.querySelector('.list')

// const inLocalStorage = []

// form.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	const { children } = event.target

// 	inLocalStorage.push(children[0].value)

// 	localStorage.setItem('todo', JSON.stringify(inLocalStorage))

// 	list.insertAdjacentHTML(
// 		'beforeend',
// 		`<li><p>Todo ${children[0].value}</p>
// 		</li>`
// 	)
// })

// if (localStorage.getItem('todo')) {
// 	JSON.parse(localStorage.getItem('todo')).map((item) => {
// 		list.insertAdjacentHTML(
// 			'beforeend',
// 			`<li><p>Todo ${item}</p>
// 		</li>`
// 		)
// 		inLocalStorage.push(item)
// 	})
// }
// ======================
// refact

// const main = document.querySelector('.main')
// const list = document.querySelector('.list')

// const form = document.createElement('form')

// const inputForTask = document.createElement('input')
// inputForTask.name = 'nameInput'

// const btn = document.createElement('button')
// btn.type = 'submit'
// btn.textContent = 'Add'

// form.append(inputForTask, btn)

// main.append(form)
// // ============

// const inLocalStorage = []

// form.addEventListener('submit', (event) => {
// 	event.preventDefault()
// 	const { value } = event.target.elements.nameInput

// 	inLocalStorage.push(value)

// 	localStorage.setItem('todo', JSON.stringify(inLocalStorage))

// 	list.insertAdjacentHTML(
// 		'beforeend',
// 		`<li>
// 			<p>Todo ${value}</p>
// 		</li>`
// 	)
// })

// if (localStorage.getItem('todo')) {
// 	JSON.parse(localStorage.getItem('todo')).map((item) => {
// 		list.insertAdjacentHTML(
// 			'beforeend',
// 			`<li>
// 				<p>Todo ${item}</p>
// 			</li>`
// 		)
// 		inLocalStorage.push(item)
// 	})
// }

// ============

// getInitialValues()
