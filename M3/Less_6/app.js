// ⁡⁣⁣⁢​‌‌‍Модуль 𝟯 Заняття 𝟲. Деструктуризація та rest/sprea​⁡

let _______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 1 - Деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// function calcBMI(weight, height) {
// 	const numericWeight = Number(weight.replace(',', '.'))
// 	const numericHeight = Number(height.replace(',', '.'))
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1))
// }

// // Було
// console.log(calcBMI('88,3', '1.75'))
// console.log(calcBMI('68,3', '1.65'))
// console.log(calcBMI('118,3', '1.95'))

// //стало
// function calcBMI({ weight, height }) {
// 	// // const weight = someObj.weight
// 	// const { weight } = someObj
// 	// // const height = someObj.height
// 	// const {height} = someObj

// 	// const { weight, height } = someObj

// 	const numericWeight = Number(weight.replace(',', '.'))
// 	const numericHeight = Number(height.replace(',', '.'))
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1))
// }
// // // Очікується
// const someObj = {
// 	weight: '88,3',
// 	height: '1.75',
// }
// console.log(calcBMI(someObj))

// const someObj2 = {
// 	weight: '88,3',
// 	height: '1.75',
// }

// console.log(calcBMI(someObj2))
// console.log(
// 	calcBMI({
// 		height: '1.75',
// 		weight: '88,3',
// 	})
// )
// console.log(
// 	calcBMI({
// 		weight: '68,3',
// 		height: '1.65',
// 	})
// )
// console.log(
// 	calcBMI({
// 		weight: '118,3',
// 		height: '1.95',
// 	})
// )

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function printContactsInfo(names, phones) {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

//стало:
// function printContactsInfo({ names, phones }) {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// const params = {
// 	names: 'Jacob,William,Solomon,Artemis',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// }

// printContactsInfo(params)
_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Глибока деструктуризація​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function getBotReport(companyName, repairBots, defenceBots) {
// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }

// console.log(getBotReport('Cyberdyne Systems', 150, 50))

// Стало

// function getBotReport({ companyName, bots }) {
// 	// const companyName = obj.companyName
// 	// const {companyName} = obj
// 	// const repair = obj.bots.repair
// 	// const {repair} = obj.bots
// 	// const {
// 	// 	companyName,
// 	// 	bots: { repair: repairBots, defense: defenseBots },
// 	// } = obj
// 	const { repair: repairBots, defense: defenseBots } = bots
// 	return `${companyName} has ${repairBots + defenseBots} bots in stock`
// }

// const someObj = {
// 	companyName: 'Cyberdyne Systems',
// 	bots: {
// 		repair: 150,
// 		defense: 50,
// 	},
// }
// console.log(getBotReport(someObj))

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Деструктуризация​⁡
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName
// та stock
// та виводила репорт про кількість товарів на складі будь-якої компанії.

//

// function getStockReport({ companyName, ...args }) {
// 	// const valueOfStock = Object.values(stock)
// 	// let total = 0
// 	// for (const value of valueOfStock) {
// 	// 	total += value
// 	// }
// 	// return `${companyName} has ${total} in stock`
// }

// console.log(
// 	getStockReport({
// 		companyName: 'Cyberdyne Systems',
// 		stock: {
// 			repairBots: 150,
// 			defenceBots: 50,
// 		},
// 		stock2: {
// 			repairBots: 150,
// 			defenceBots: 50,
// 		},
// 	})
// ) // "Cyberdyne Systems has 200 items in stock"

// console.log(
// 	getStockReport({
// 		companyName: 'Belacci',
// 		stock: {
// 			shoes: 20,
// 			skirts: 10,
// 			hats: 5,
// 		},
// 	})
// ) // "Belacci has 35 item in stock"

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Операція 𝘀𝗽𝗿𝗲𝗮𝗱​⁡
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту
// з доданими властивостями id та createdAt, а також list зі значенням "default" якщо
// в partialContact немає такої властивості.

//

// function createContact(partialContact) {
// }

// console.log(
// 	createContact({
// 		name: 'Mango',
// 		email: 'mango@mail.com',
// 		list: 'friends',
// 	})
// )

// console.log(
// 	createContact({
// 		name: 'Poly',
// 		email: 'poly@hotmail.com',
// 	})
// )

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁣⁣​‌‍‌Example 6 - Операція rest​⁡
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// //
// function transformId({ firstName, lastName, ...otherProps }) {
// 	return {
// 		fullName: `${firstName} ${lastName}`,
// 		...otherProps,
// 	}
// }

// console.log(
// 	transformId({
// 		id: 1,
// 		firstName: 'Jacob',
// 		lastName: 'Mercer',
// 		email: 'j.mercer@mail.com',
// 		friendCount: 40,
// 	})
// )

// console.log(
// 	transformId({
// 		id: 2,
// 		firstName: 'Adrian',
// 		lastName: 'Cross',
// 		email: 'a.cross@hotmail.com',
// 		friendCount: 20,
// 	})
// )

// const products = [
// 	{ name: 'Radar', price: 1300, quantity: 4 },
// 	{ name: 'Scanner', price: 2700, quantity: 3 },
// 	{ name: 'Droid', price: 400, quantity: 7 },
// 	{ name: 'Grip', price: 1200, quantity: 9 },
// ]

// function getAllPropValues(propName) {
// 	const allValues = []

// 	for (const oneProd of products) {
// 		allValues.push(oneProd[propName])
// 	}
// 	console.log(allValues)
// }

// getAllPropValues('name')
// getAllPropValues('price')
// getAllPropValues('quantity')

const students = [
	{ name: 'Манго', courses: ['математика', 'фізика'] },
	{ name: 'Полі', courses: ['інформатика', 'математика'] },
	{ name: 'Ківі', courses: ['фізика', 'біологія'] },
]

const allCourses = students.flatMap((student) => student.courses)
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log(allCourses)
