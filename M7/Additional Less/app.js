// function
// return

// function fn() {
// 	const result = 2 + 2
// 	return result
// }

// const number = fn()
// console.log('number :>> ', number)
// let number = 0
// function fn() {
// 	number += 2
// }
// console.log('number before :>> ', number)

// fn()

// console.log('number after :>> ', number)

// const fn = (a, b) => {
// 	const result = a + b
// 	return result
// }

// const result = fn('Alex', '!')
// console.log('result :>> ', result)

// const result2 = fn('!', 'Alex')
// console.log('result :>> ', result2)

// const fn = ({ a, b }) => a + b

// const result = fn({ a: 'Alex', b: '!' })
// console.log('result :>> ', result)

// const result2 = fn({ b: '!', a: 'Alex' })
// console.log('result :>> ', result2)

// function getData(params) {
// 	return { ...params, id: '123kjnaskjd' }
// }

// const user = {
// 	name: 'alex',
// }
// const newUser = getData(user)
// console.log('newUser :>> ', newUser)

// callBack

// function main(name, clbFn) {
// 	name += '!'
// 	clbFn(name)
// }

// function getName(params) {
// 	console.log(params + '!!')
// }

// function createDollar(params) {
// 	console.log(params + '$$')
// }

// function createDollar2(params) {
// 	console.log(params + '@@')
// }

// main('Alex', getName)
// main('Alex', createDollar)
// main('Maxim', createDollar)
// main('Maxim', createDollar2)

// ================================================================================================

// const div = document.querySelector('div')
// div.addEventListener('click', (eve) => {
// 	console.log('target:', eve.target)
// 	console.log('currentTarget:', eve.currentTarget)
// })

// const div = document.querySelector('div')
// div.addEventListener('click', handleClickDiv)

// function handleClickDiv(ev) {
// 	// if (ev.target.tagName === 'BUTTON') {
// 	// 	ev.target.textContent = 'Click'
// 	// } else
// 	div.style.backgroundColor = 'black'
// }

// const btn1 = div.querySelector('#first')
// const btn2 = div.querySelector('#second')

// btn1.addEventListener('click', handleBTN1)
// btn1.addEventListener('click', handleBTN)

// btn2.addEventListener('click', handleBTN1)
// btn2.addEventListener('click', handleBTN)

// function handleBTN1(ev) {
// 	if (ev.target.textContent === 'create') {
// 		ev.stopImmediatePropagation()
// 	}
// 	ev.target.textContent = 'Click'
// 	ev.stopPropagation()
// }

// function handleBTN(ev) {
// 	console.log('ev :>> ', ev)
// 	ev.target.style.backgroundColor = 'red'
// }

// const main = document.querySelector('.card')

// function createElDom(element, className, text) {
// 	const el = document.createElement(element)
// 	el.classList = className
// 	el.textContent = text
// 	return el
// }

// const div = createElDom('div', 'classDiv', 'Text')
// console.log('div :>> ', div)
// // main.append(div)
// const p = '<p>lorem</p>'
// console.log('p :>> ', p)
// main.innerHTML = div.outerHTML
// main.insertAdjacentHTML('beforeend',)
// main.insertAdjacentElement('afterend',)
// console.log('div :>> ', div)
