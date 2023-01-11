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

const list = document.querySelector('.tasks')
const form = document.querySelector('form')

form.addEventListener('submit', onTextInput)

function onTextInput(event) {
	event.preventDefault()
	const li = document.createElement('li')
	const input = form.querySelector('#task')
	li.textContent = input.value
	const arrLi = [...list.children]
	// const arrLi = Array.from(list.children)

	arrLi.length === 0 && list.append(li)
	console.log('arrLi :>> ', arrLi)
	if (arrLi.find((li) => li.textContent === input.value))
		alert('Така задача вже існує')
	else list.append(li)

	// : arrLi.forEach((element) => {
	// 		if (element.textContent !== input.value) {
	// 			list.append(li)
	// 		} else alert('Така задача вже існує')
	//   })
	// else
	// for (const elem of arrLi) {
	// 	if (elem.textContent === input.value) {
	// 		alert('Така задача вже існує')
	// 		break
	// 	} else {
	// 		list.append(li)
	// 		break
	// 	}
	// }
	// if (list.includes(input.value)) {
	// 	alert('Така задача вже існує')
	// } else
	// list.append(li)
	event.currentTarget.reset()
}
