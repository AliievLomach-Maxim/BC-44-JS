// ⁡⁣⁣⁢​‌‌‍Модуль 𝟰. Заняття 𝟴. Перебираючі методи масиву⁡​⁡

// ​‌‍‌⁡⁢⁢⁢Колекція об'єктів для всіх прикладів з автомобілями⁡​
// 1 - Garik
// 2 - Oksana
// 3 -Роман Закреничный
// 4 - Vasyl
const cars = [
	{
		make: 'Honda',
		model: 'CR-V',
		type: 'suv',
		amount: 14,
		price: 24045,
		onSale: true,
	},
	{
		make: 'Honda',
		model: 'Accord',
		type: 'sedan',
		amount: 2,
		price: 22455,
		onSale: true,
	},
	{
		make: 'Mazda',
		model: 'Mazda 6',
		type: 'sedan',
		amount: 8,
		price: 24195,
		onSale: false,
	},
	{
		make: 'Mazda',
		model: 'CX-9',
		type: 'suv',
		amount: 7,
		price: 31520,
		onSale: true,
	},
	{
		make: 'Toyota',
		model: '4Runner',
		type: 'suv',
		amount: 19,
		price: 34210,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Sequoia',
		type: 'suv',
		amount: 16,
		price: 45560,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Tacoma',
		type: 'truck',
		amount: 4,
		price: 24320,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'F-150',
		type: 'truck',
		amount: 11,
		price: 27110,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Fusion',
		type: 'sedan',
		amount: 13,
		price: 22120,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Explorer',
		type: 'suv',
		amount: 6,
		price: 31660,
		onSale: false,
	},
]
const cars2 = [
	{
		make: 'Honda',
		model: 'CR-V',
		type: 'suv',
		amount: 14,
		price: 24045,
		onSale: true,
	},
	{
		make: 'Honda',
		model: 'Accord',
		type: 'sedan',
		amount: 2,
		price: 22455,
		onSale: true,
	},
]

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Метод 𝗺𝗮𝗽​⁡
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// function getModels(arr) {
// 	const getModel = arr.map((car) => car.model)
// 	return getModel
// }

// function getModels(arr) {
// 	const getModel = arr.map((car) => car.model)
// 	return getModel
// }

// function getModels(arr) {
// 	return arr.map((car) => car.model)
// }

// const getModels = (arr) => {
// 	// const getModel = arr.map(function (obj) {
// 	// 	return obj.model
// 	// })

// 	// const getModel = arr.map((obj) => {
// 	// 	return obj.model
// 	// })

// 	// const getModel = arr.map((obj) => obj.model)
// 	// return getModel

// 	return arr.map((obj) => obj.model)
// }

// const getModels = (arr) => arr.map((obj) => obj.model)

// console.table(getModels(cars2))
// console.table(getModels(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Мет⁡⁢⁣⁣од 𝗺𝗮𝗽​⁡
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
// 	cars.map((car) => {
// 		const newObj = {
// 			...car,
// 			price: car.price - car.price * discount,
// 		}
// 		return newObj
// 	})

// const makeCarsWithDiscount = (cars, discount) =>
// 	cars.map((car) => ({ ...car, price: car.price - car.price * discount }))

// console.table(makeCarsWithDiscount(cars, 0.2))
// // console.table(makeCarsWithDiscount(cars, 0.4))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) =>
// 	cars.map((car) => {
// 		if (car.price < threshold) return car
// 	})

// // const filterByPrice = (cars, threshold) =>
// // 	cars.filter((car) => car.price < threshold)

// console.table(filterByPrice(cars, 30000))
// console.table(filterByPrice(cars, 25000))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale)

// console.table(getCarsWithDiscount(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿​⁡
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// console.table(getCarsWithType(cars, 'suv'))
// console.table(getCarsWithType(cars, 'sedan'))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Метод 𝗳𝗶𝗻𝗱​⁡

// console.log(getCarByModel(cars, 'F-150'))
// console.log(getCarByModel(cars, 'CX-9'))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// console.table(sortByAscendingAmount(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// console.table(sortByDescendingPrice(cars))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Метод 𝘀𝗼𝗿𝘁​⁡
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// console.table(sortByModel(cars))

// console.table(sortByModel(cars, 'asc'))
// console.table(sortByModel(cars, 'desc'))

//
//
// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟬 - Метод 𝗿𝗲𝗱𝘂𝗰𝗲​⁡
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// let total = 0
// const getTotalAmount = (cars) => {
// 	// for (let i = 0; i < cars.length; i++) {
// 	// 	total += cars[i].amount
// 	// }
// 	cars.map((el) => {
// 		total += el.amount
// 	})
// 	return total
// }

// const getTotalAmount = (cars) => {
// 	// for (let i = 0; i < cars.length; i++) {
// 	// 	total += cars[i].amount
// 	// }
// 	const result = cars.reduce((total, el, index, arr) => {
// 		return (total += el.amount)
// 	},0)
// 	return result
// }

// // const getTotalAmount = (cars) =>
// // 	cars.reduce((total, el) => total + el.amount, 0)

// console.log(getTotalAmount(cars))

// const numbers = [12, 12, 12, 12, 1213, 14, 14, 151]

// const getTotalAmount = (cars) => {
// 	// for (let i = 0; i < cars.length; i++) {
// 	// 	total += cars[i].amount
// 	// }
// 	const result = cars.reduce((total, el, index, arr) => {
// 		return (total += el)
// 	})
// 	return result
// }

// // const getTotalAmount = (cars) =>
// // 	cars.reduce((total, el) => total + el.amount, 0)

// console.log(getTotalAmount(numbers))

// const names = ['Alex', 'Maxim', 'Oleg', 'Jim', 'Scotch']

// const createStr = (arr) => arr.reduce((acc, el) => (acc += el + '! '), '')

// console.log('createStr', createStr(names))

// function main(a, b, clbFn) {
// 	const newB = clbFn(b)
// 	return a + newB
// }

// function main(a, b, clbFn) {
// 	return a + clbFn(b)
// // }

// const main = (a, b, clbFn) => a + clbFn(b)

// function secondFn(b) {
// 	return b + 10
// }

// function thirdFn(b) {
// 	return b + 100
// }

// console.log('first', main(10, 20, secondFn))
// console.log('first', main(10, 20, thirdFn))

const main = (a, b, clbFn) => a + clbFn(b)

// console.log(
// 	'first',
// 	main(10, 20, function (b) {
// 		return b + 10
// 	})
// )
// console.log(
// 	'first',
// 	main(10, 20, (b) => b + 10)
// )

// const arr = [1, 2, 3]
// arr.map((b) => {
// 	console.log('b', b)
// })

// const arr = [12, 13, 14, 15, 16, 17]

// let total = 0
// arr.map((number) => {
// 	total += number
// })
// console.log('total', total)

// const result = arr.reduce((sum, el) => {
// 	return sum + el
// }, 0)
// console.log('result', result)

// const testArr = [
// 	{ number: 999 },
// 	{ number: 25 },
// 	{ number: 26 },
// 	{ number: 27 },
// 	{ number: 29 },
// ]
// let sum = 0
// testArr.map((el) => {
// 	sum += el.number
// })
// console.log('sum', sum)

// const result = testArr.reduce((sum, el, index, arr) => {
// 	if (index === arr.length - 1) {
// 		return (sum += el.number + arr[0].number ** 2)
// 	}
// 	return (sum += el.number)
// }, 0)
// console.log('result', result)

// testArr
// 	.map((el) => el.number)
// 	.reduce((acc, el, index, arr) => {
// 		console.log('arr', arr)
// 	})
