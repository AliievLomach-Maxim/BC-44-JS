// ⁡⁣⁣⁢​‌‌‍Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach​⁡

let _______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Коллбек функції​⁡
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id,
// а також коллбек.
// 1 - Функція створює об'єкт з обʼєкту obj,
// 2 - додаючи йому унікальний ідентифікатор у властивість id
// 3 -та викликає коллбек передаючи йому створений об'єкт .

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

// logTotalPrice(product) - колббек, що приймає об'єкт продукту і
// логіює загальну вартість товару в консоль

// // Рішення

// function createProduct(obj, aaa) {
// 	const newObj = { id: Math.random().toString(16).slice(2, 14), ...obj }
// 	aaa(newObj)
// 	// callback({ id: Math.random().toString(16).slice(2, 14), ...obj })
// }

// // console.log(
// // 	'12786ab8237f72387',
// // 	(Math.random() * 10000000000000000).toString(16).substring(2).length
// // )

// function logProduct(x) {
// 	console.log('product', x)
// }

// function logTotalPrice(product) {
// 	console.log('sum:', product.price * product.quantity)
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct)
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Коллбек функції​⁡
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError), де перший параметр
// це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT
// або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо
// - amount більше TRANSACTION_LIMIT
// - менше або дорівнює нулю,
// - onSuccess в іншому випадку.

// Рішення
// const TRANSACTION_LIMIT = 1000

// const account = {
// 	username: 'Jacob',
// 	balance: 400,
// 	withdraw(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) onError('Перевищено ліміт транзакції')
// 		else if (amount > this.balance) onError('Недостатньо коштів')
// 		else {
// 			this.balance -= amount
// 			onSuccess(`Withdraw ${amount}uah done. Your balance: ${this.balance}uah`)
// 		}
// 	},
// 	deposit(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) onError('Перевищено ліміт транзакції')
// 		else if (amount <= 0) onError('Транзакція неможлива, ДАЙТЕ БІЛЬШЕ ГРОШЕЙ')
// 		else {
// 			this.balance += amount
// 			onSuccess(`Deposit ${amount}uah done. Your balance: ${this.balance}uah`)
// 		}
// 	},
// }

// function handleSuccess(message) {
// 	console.log(`✅ Success! ${message}`)
// }

// function handleError(message) {
// 	console.log(`❌ Error! ${message}`)
// }

// account.withdraw(2000, handleSuccess, handleError)
// account.withdraw(600, handleSuccess, handleError)
// account.withdraw(300, handleSuccess, handleError)
// account.deposit(1700, handleSuccess, handleError)
// account.deposit(0, handleSuccess, handleError)
// account.deposit(-600, handleSuccess, handleError)
// account.deposit(600, handleSuccess, handleError)

// function fn(a, b) {
// 	console.log('a+b', a + b)
// }

// fn(10, 20)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Коллбек функції​⁡
// Напишіть функцію each(array, callback), яка першим параметром очікує масив,
// а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.

// // Рішення
// function each

// // ...
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value * 2
// 	})
// )
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value - 10
// 	})
// )
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return Math.sqrt(value)
// 	})
// )
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.ceil(value)
// 	})
// )
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.floor(value)
// 	})
// )
// console.log(
// 	each(['Maxim', 'Alex', 'Anet'], function (value) {
// 		return value.toLowerCase()
// 	})
// )
_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Стрілочні функції​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// const createProduct =function (partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// const createProduct =  (partialProduct, callback)=> {
// 	const product = { id: Date.now(), ...partialProduct }
// 	callback(product)
// }

// function logProduct(product) {
// 	console.log(product)
// }

// function logTotalPrice(product) {
// 	console.log(product.price * product.quantity)
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct)
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 5 - Стрілочні функції​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000

// const account = {
// 	username: 'Jacob',
// 	balance: 400,

// 	withdraw: (amount, onSuccess, onError) => { //Стрілка тут не працює через втрату контаксту this
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
// 		} else if (amount > this.balance) {
// 			onError(`Amount can't exceed account balance of ${this.balance} credits`)
// 		} else {
// 			console.log('this>>', this)
// 			this.balance -= amount
// 			onSuccess(`Account balance: ${this.balance}`)
// 		}
// 	},
// 	deposit(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
// 		} else if (amount <= 0) {
// 			onError(`Amount must be more than 0 credits`)
// 		} else {
// 			console.log('this>>', this)
// 			this.balance += amount
// 			onSuccess(`Account balance: ${this.balance}`)
// 		}
// 	},
// }

// const handleSuccess = (message) => console.log(`✅ Success! ${message}`)

// const handleError = (message) => console.log(`❌ Error! ${message}`)

// account.withdraw(2000, handleSuccess, handleError)
// account.withdraw(600, handleSuccess, handleError)
// account.withdraw(300, handleSuccess, handleError)
// // account.deposit(1700, handleSuccess, handleError)
// // account.deposit(0, handleSuccess, handleError)
// // account.deposit(-600, handleSuccess, handleError)
// // account.deposit(600, handleSuccess, handleError)

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 6 - Інлайн стрілочні функції​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
// 	const newArr = []
// 	for (const el of array) {
// 		newArr.push(callback(el))
// 	}
// 	return newArr
// }

// console.log(
// 	each([64, 49, 36, 25, 16], function (params) {
// 		return params * 2
// 	})
// )

// // const fn2 = (params) => {
// // 	return params * 2
// // }

// console.log(
// 	each([64, 49, 36, 25, 16], (params) => {
// 		return params * 2
// 	})
// )

// console.log(each([64, 49, 36, 25, 16], (params) => params * 2))
// console.log(each([64, 49, 36, 25, 16], fn))
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], fn))
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], fn))

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 7 - Метод forEach​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const logItems = (items) => {
// 	// for (let i = 0; i < items.length; i += 1) {
// 	// 	console.log(`${i + 1} - ${items[i]}`)
// 	// }
// 	// function clb(el, ind, arr) {
// 	// 	console.log('el', el)
// 	// 	console.log('ind', ind)
// 	// 	console.log('arr', arr)
// 	// }
// 	// items.forEach(clb)

// 	// items.forEach((el, ind) => {
// 	// 	console.log(`${ind + 1} - ${el}`)
// 	// })
// //     function foreach(clb){
// //         for (let i = 0; i < items.length; i++) {
// //             const element = items[i]
// //             const index = i
// //             const arr = items
// // clb(element,index,arr)
// //         }
// //     }
// }

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 8 - Метод forEach​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const printContactsInfo = ({ names, phones }) => {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	// for (let i = 0; i < nameList.length; i += 1) {
// 	// 	console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	// }
// 	nameList.forEach(function (name, index) {
// 		console.log(`${name}: ${phoneList[index]}`)
// 	})
// 	nameList.forEach((name, index) => {
// 		console.log(`${name}: ${phoneList[index]}`)
// 	})
// }

// printContactsInfo({
// 	names: 'Jacob,William,Solomon,Artemis',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// })

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 9 - Метод forEach​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calculateAverage(...args) {
// 	let total = 0
// 	for (let i = 0; i < args.length; i++) {
// 		total += args[i]
// 	}
// 	return total / args.length
// }

// console.log(calculateAverage(1, 2, 3, 4)) // 2.5
// console.log(calculateAverage(14, 8, 2)) // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)) // 23.2

_______________________________________________________________________________________________________________________________________
_______________________________________________________________________________________________________________________________________
