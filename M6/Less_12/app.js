// ⁡⁣⁣⁢​‌‌‍Модуль 6. Заняття 12. ​‌‍‌𝗗𝗢𝗠⁡​

// Form
// submit
// preventDefault

// const ulList = document.querySelector('ul')
// console.log('ulList :>> ', ulList)
// const liEl = ulList.querySelector('li')
// console.log('liEl :>> ', liEl)

// const content = document.querySelector('.content')
// const someTag = content.querySelector('h1')
// const liList = content.querySelectorAll('li')
// liList.forEach((el) => {
// 	el.classList = 'newClass'
// })
// console.log('liList :>> ', liList)

// const list = document.querySelector('.tasks')
// const form = document.querySelector('form')

// form.addEventListener('submit', onTextInput)

// function onTextInput(event) {
// 	event.preventDefault()
// 	const li = document.createElement('li')
// 	const input = form.querySelector('#task')
// 	li.textContent = input.value
// 	const arrLi = [...list.children]
// 	// const arrLi = Array.from(list.children)

// 	arrLi.length === 0 && list.append(li)
// 	console.log('arrLi :>> ', arrLi)
// 	if (arrLi.find((li) => li.textContent === input.value))
// 		alert('Така задача вже існує')
// 	else list.append(li)

// 	// : arrLi.forEach((element) => {
// 	// 		if (element.textContent !== input.value) {
// 	// 			list.append(li)
// 	// 		} else alert('Така задача вже існує')
// 	//   })
// 	// else
// 	// for (const elem of arrLi) {
// 	// 	if (elem.textContent === input.value) {
// 	// 		alert('Така задача вже існує')
// 	// 		break
// 	// 	} else {
// 	// 		list.append(li)
// 	// 		break
// 	// 	}
// 	// }
// 	// if (list.includes(input.value)) {
// 	// 	alert('Така задача вже існує')
// 	// } else
// 	// list.append(li)
// 	event.currentTarget.reset()
// }

// const btn = document.querySelector('button')
// btn.addEventListener('click', handleClick)

// function handleClick(event) {
// 	console.log(event.target.textContent)
// 	console.log('Click on btn :>> ')
// }

// const card = document.querySelector('.card')
// card.addEventListener('click', handleClick)

// function handleClick(event) {
// 	// console.log('event :>> ', event)
// 	console.log('event.target :>> ', event.target)
// 	console.log('event.currentTarget :>> ', event.currentTarget)
// }

// const pEl = document.querySelector('p')
// pEl.addEventListener('click',  (event)=>{

// })
// // const arr = Array.from(pEl)

// // console.log('arr :>> ', arr)

// // const arr = [1, 2, 3, 45]

// // const x = arr.push(12)

// // console.log('x :>> ', x)
// pEl.addEventListener('click', handleClick)

// pEl.oninput = handleClick

// function handleClick(event) {
// 	console.log(event)
// }

// const input = document.querySelector('input')
// input.addEventListener('blur', handleBlur)

// function handleBlur(event) {
// 	if (event.target.value.includes('@')) {
// 		input.style.borderColor = 'red'
// 	} else input.style.borderColor = 'black'

// 	input.style.backgroundColor = 'white'
// 	input.style.color = 'black'
// }

// input.addEventListener('focus', handleFocus)

// function handleFocus() {
// 	input.textContent = ''
// 	input.style.backgroundColor = 'black'
// 	input.style.color = 'white'
// }

// const form = document.querySelector('form')
// form.onsubmit = handleSubmit

// function handleSubmit(event) {
// 	event.preventDefault()
// 	// const {
// 	// 	elements: { name, email, task },
// 	// } = event.target

// 	// // console.log('event :>> ', event.target.elements.email.value)
// 	// // console.log('event :>> ', event.target.elements.name.value)
// 	// // const { name, email } = elements
// 	// console.log('name :>> ', name.value)
// 	// console.log('email :>> ', email.value)
// 	// console.log('email :>> ', task.value)
// 	// const {value} = event.target.elements.email
// 	// const {target:{elements:{email:{value}}}} = event

// 	// const {email,name} = event.target.elements
// 	const { target } = event
// 	const {
// 		email: { value: valueEmail },
// 		name: { value: valueName },
// 	} = target.elements

// 	console.log('valueEmail :>> ', valueEmail)
// 	console.log('valueName :>> ', valueName)
// }

