'use strict'
// ⁡⁣⁣⁢​‌‌‍Модуль 5. Заняття 9. Контекст виклику функції та this​⁡

// function fn(a, b) {
// 	console.log('this', this)
// }

// const user = {
// 	name: 'Alex',
// }

// const fn2 = () => {
// 	console.log('thisFn2', this)
// }
// fn2.call(user)
// const user2 = {
// 	name: 'Alex2',
// }
// const user3 = {
// 	name: 'Alex3',
// }
// user.fn = fn
// user.fn()
// fn()
// fn.call(user, 10, 20) // =>> fn()
// fn.apply(user, [10, 20]) // =>> fn()
// const newFnBind = fn.bind(user, 10, 20) // =>> fn
// newFnBind()
// fn.call(user2)
// fn.call(user3)

// const user = {
// 	name: 'Alex',
// 	sayHi(clb) {
// 		console.log('clb', clb)
// 		// clb.call(user)
//         clb()
// 	},
// }

// function clbFn() {
// 	console.log('this', this)
// 	return 10
// }

// user.sayHi(clbFn.bind(user))
// user.sayHi(clbFn)
// user.sayHi(clbFn) =>> user.sayHi(clbFn())

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Майстерня коштовностей​⁡
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
// 	stones: [
// 		{ name: 'Emerald', price: 1300, quantity: 4 },
// 		{ name: 'Diamond', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire', price: 1400, quantity: 7 },
// 		{ name: 'Ruby', price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice(stoneName) {
// 		// this.stones.find((stone) => stone.name === stoneName)
// 		// return this.price * this.quantity
// 		const item = this.stones.find((stone) => stone.name === stoneName)
// 		return item.price * item.quantity
// 		// return (
// 		// 	this.stones.find((stone) => stone.name === stoneName).price *
// 		// 	this.stones.find((stone) => stone.name === stoneName).quantity
// 		// )
// 	},
// }

// console.log(chopShop.calcTotalPrice('Emerald')) // 5200
// console.log(chopShop.calcTotalPrice('Diamond')) // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')) // 9800
// console.log(chopShop.calcTotalPrice('Ruby')) // 1600

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Телефонна книга​⁡
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phoneBook = {
// 	contacts: [],
// 	add(contact) {
// 		const newContact = {
// 			list: 'default',
// 			...contact,
// 			id: generateId(),
// 			createdAt: getDate(),
// 		}
// 		contacts.push(newContact)
// 	},
// 	generateId() {
// 		return '_' + Math.random().toString(36).substr(2, 9)
// 	},
// 	getDate() {
// 		return Date.now()
// 	},
// }

// phoneBook.add({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// 	list: 'friends',
// })

// phoneBook.add({
// 	name: 'Poly',
// 	email: 'poly@hotmail.com',
// })
// console.log('phoneBook', phoneBook.contacts)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Калькулятор​⁡
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
// 	read(a, b) {
// 		this.firstNumber = a
// 		this.secondNumber = b
// 	},
// 	add() {
// 		return this.firstNumber + this.secondNumber
// 	},
// 	mult() {
// 		return this.firstNumber * this.secondNumber
// 	},
// }

// calculator.read(10, 20)
// console.log('add', calculator.add())
// console.log('mult', calculator.mult())
// console.log('calculator', calculator)

// const calculator = {}

// function read(a, b) {
// 	this.firstNumber = a
// 	this.secondNumber = b
// }

// function add(fn) {
// 	return this.firstNumber + this.secondNumber
// }

// function mult() {
// 	return this.firstNumber * this.secondNumber
// }

// read.call(calculator, 10, 20)
// console.log('add', add.call(calculator))
// console.log('mult', mult.call(calculator))
// console.log('calculator', calculator)

// const calculator = {}

// function read(a, b) {
// 	this.firstNumber = a
// 	this.secondNumber = b
// }
// // const readsBinded = read.bind(calculator, 10, 20)

// function add(fn) {
// 	fn(this.firstNumber + this.secondNumber)
// 	return this.firstNumber + this.secondNumber
// }

// function sum(number) {
// 	console.log('this', this)
// 	console.log('number', number)
// }

// read.call(calculator, 10, 20)
// add.call(calculator, sum.bind(calculator))
// console.log('add', add.call(calculator, sum))

// console.log('calculator', calculator)

function main(number) {
	return function (number2) {
		console.log('sum', number + number2)
	}
}

const fn = main(10)
fn(30)
fn(40)
fn(50)
fn(60)
fn(20)

const fn2 = main(100)
fn2(30)
fn2(40)
fn2(50)
fn2(60)
fn2(20)
