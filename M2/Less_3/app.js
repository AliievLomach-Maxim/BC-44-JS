// ​‌‌‍⁡⁣⁣⁢Модуль 2. Заняття 3. Масиви​​⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Базові операції з масивом​⁡
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
// довільної довжини.
// Видаліть перший елемент та виведіть його в консоль. shift
// Вставте «Country» та «Reggae» на початок масиву. unshift/splice

// const genres = ['Jazz', 'Blues']
// genres.push('Rock&Roll')
// // console.log(genres[0])
// // console.log(genres[genres.length - 1])
// // genres.shift()
// // const sh = genres.shift()
// // console.log(sh)
// // console.log(genres)

// genres.splice(1, 2, 'Country', 'Reggae')

// console.log(genres)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Масиви та рядки​⁡
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = '8 11 10 12 12'
// const s = values.split(' ')

// const a = Number(s[0])
// const b = Number(s[1])

// console.log(a * b)

// console.log('result', result)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Перебір масиву​⁡
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі
// номер_елемента: значення_елемента.
// Нумерація елементів повинна починатися з 1.
// 1 - 🍎

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋']

// for (let i = 0; i < fruits.length; i += 1) {
// 	console.log(`${i + 1}: ${fruits[i]}`)
// }

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Масиви та цикли​⁡
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Soloviov,Artemis'
// const phones = '89001234567,89001112233,890055566377,890055566300'

// const namesMas = names.split(',')
// const phonesMas = phones.split(',')

// for (let i = 0; i < namesMas.length; i += 1) {
// 	console.log(`${namesMas[i]} - ${phonesMas[i]}`)
// }

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Масиви та рядки​⁡
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future'
// const arr = string.split(' ')
// arr.shift()
// arr.pop()
// const arrToStr = arr.join(' ')
// console.log(arrToStr)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Масиви та рядки​⁡
// Напиши скрипт, який «розгортає» рядок (зворотній порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future'
// const arr = string.split('')
// const arr2 = []

// for (let i = arr.length - 1; i >= 0; i -= 1) {
// 	arr2.push(arr[i])
// }
// const strRev = arr2.join('')
// console.log('strRev', strRev)
// ---------1
// const str = arr.reverse()
// const result = str.join('')
// console.log('result', result)
// ---------2
// const result = arr.reverse().join('')
// console.log('result', arr)
// -----3
// const string = 'Welcome to the future'
// const result = string.split('').reverse().join('')
// console.log('result', result)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Пошук елемента​⁡
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого
// масиву чисел.
// Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37]
// let minNumbers = numbers[0] //2
// for (let i = 0; i < numbers.length; i += 1) {
// 	// if (minNumbers > numbers[i]) {
// 	//     //2>2
// 	//     //2>17
// 	//     //2>94
// 	//     //2>1 >>> 2=1
// 	//     //1>23
// 	//     //1>37
// 	// 	minNumbers = numbers[i]
// 	// }

// 	if (minNumbers < numbers[i]) {
// 	} else {
// 		minNumbers = numbers[i]
// 	}
// }
// console.log('miNumbers', minNumbers)

// const numbers = [20, 17, 94, 11, 23, 37, 3]
// let minNumbers = numbers[0] //2

// for (let i = 0; i < numbers.length; i += 1) {
// 	console.log('minNumbers:', minNumbers, 'numbers[i]:', numbers[i])
// 	console.log('minNumbers > numbers[i]', minNumbers > numbers[i])
// 	if (minNumbers > numbers[i]) {
// 		minNumbers = numbers[i]
// 	}
// 	console.log('minNumbers', minNumbers)
// }
// console.log('miNumbersRESULT', minNumbers)

// const numbers = [20, 17, 94, 11, 23, 37, 3]

// let maxNumbers = numbers[0]

// for (let i = 0; i < numbers.length; i += 1) {
// 	if (maxNumbers < numbers[i]) {
// 		maxNumbers = numbers[i]
// 	}
// }
// console.log('maxNumbers', maxNumbers)

// ⁡⁢⁣⁣​‌‌‍‍Example 8 - Магазин​⁡
// Відправити суму проданих товарів кожного постачальника
// Всі товари по 20
// Закупівля по 10

// const startOrderPrice = 10

// const deliver1 = ['стол', 'ніж', 'банка', 'лопатка']
// const deliver2 = ['тарілка', 'ложка', 'стільчик', 'виделка']

// const productFromFirst = [
// 	'тарілка',
// 	'ложка',
// 	'виделка',
// 	'стільчик',
// 	'стол',
// 	'ніж',
// 	'банка',
// 	'лопатка',
// ]

// const productCode = [
// 	'1234',
// 	'2345',
// 	'3456',
// 	'4567',
// 	'5678',
// 	'6789',
// 	'7890',
// 	'8901',
// ]
// const register = ['3456', '4567', '5678', '8901']

// let sumForD1 = 0
// let sumForD2 = 0

// for (let i = 0; i < register.length; i++) {
// 	if (productCode.includes(register[i])) {
// 		const searchIndex = productCode.indexOf(register[i])
// 		if (deliver1.includes(productFromFirst[searchIndex])) {
// 			sumForD1 += startOrderPrice
// 			productCode.splice(searchIndex, 1)
// 			productFromFirst.splice(searchIndex, 1)
// 		} else if (deliver2.includes(productFromFirst[searchIndex])) {
// 			sumForD2 += startOrderPrice
// 			productCode.splice(searchIndex, 1)
// 			productFromFirst.splice(searchIndex, 1)
// 		} else {
// 			console.log('Лівак')
// 		}
// 	}
// }

// console.log('productCode', productCode)
// console.log('productFromFirst', productFromFirst)
// console.log('sumForD1', sumForD1)
// console.log('sumForD2', sumForD2)

// const atTheOldToad = {
// 	potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// 	removePotion(potionName) {
// 		// Change code below this line
// 		const index = this.potions.indexOf(potionName)
// 		this.potions.splice(index, 1)
// 		return this.potions
// 		// return this.potions.splice(this.potions.indexOf(potionName), 1);

// 		// Change code above this line
// 	},
// }
// console.log('atTheOldToad', atTheOldToad.removePotion('Dragon breath'))
// // console.log(atTheOldToad.removePotion(‚Dragon breath‘))

// const arr = [1, 2, 3, 4, 5, 3, 2]
// let max = arr[0]

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > x) {
// 		//1>1// 2>1 //3>2
// 		max = arr[i]
// 	}
// }
// console.log('y', y)

// function findLongestWord(string) {
// 	// Change code below this line
// 	let arrStr = string.split(' ')
// 	let wordLength = arrStr[0]
// 	// let longestWord;

// 	for (let i = 0; i < arrStr.length; i += 1) {
// 		// wordLength = arrStr[1].length

// 		if (arrStr[i].length > wordLength.length) {
// 			//   longestWord = arrStr[i];
// 			wordLength = arrStr[i]
// 		}
// 	}
// 	return wordLength
// 	// Change code above this line
// }
// console.log(
// 	'findLongestWord',
// 	findLongestWord('asd asdf asdw asdgf asdfghj! asd wq222')
// )
function findLongestWord(string) {
	// Change code below this line
	let arrStr = string.split(' ')
	let wordLength = 0
	let longestWord

	for (let i = 0; i < arrStr.length; i += 1) {
		wordLength = arrStr[1].length

		if (arrStr[i].length > wordLength) {
			longestWord = arrStr[i]

			return longestWord
		}
	}
	// Change code above this line
}

findLongestWord('The quick brown fox jumped over the lazy dog')