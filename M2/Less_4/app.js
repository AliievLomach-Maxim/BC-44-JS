// ⁡⁣⁣⁢​‌​‌‌‍Модуль 2. Заняття 4. Функції​⁡

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Індекс маси тіла​⁡
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в
// кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// Prompt!!!

// <18,5 => Недостатня вага

// 18,5-24,9 => Нормальна вага

// 25,0 => Зайва вага

function calcBMI(weight, height) {
	const newWeight = Number(weight.replace(',', '.'))
	const newHeight = Number(height.replace(',', '.'))

	// const index = newWeight/(newHeight*newHeight)
	const index = (newWeight / Math.pow(newHeight, 2)).toFixed(1)
	return index
}

let infoWeight = prompt('Input pls your weight:') //12,9
let infoHeight = prompt('Input pls your height:') //1,8

const bmi = calcBMI(infoWeight, infoHeight)
alert(bmi)

// if (bmi > 18.5 && bmi < 24.9) {
// 	alert(`Нормальна вага,  ${bmi}`)
// } else if (bmi > 25) {
// 	alert('Зайва вага')
// } else {
// 	alert('Недостатня вага')
// }
// calcBMI('88,3', '1.75')
// const bmi = calcBMI('88,3', '1.75')
// console.log(bmi) // 28.8

// ------2----
// function calcBMI(weight, height) {
// 	const newWeight = Number(weight.replace(',', '.'))
// 	const newHeight = Number(height.replace(',', '.'))

// 	// const index = newWeight/(newHeight*newHeight)
// 	const index = (newWeight / Math.pow(newHeight, 2)).toFixed(1)
// 	if (index > 18.5 && index < 24.9) {
// 		return `Нормальна вага,  ${index}`
// 	} else if (index > 25) {
// 		return `Зайва вага,  ${index}`
// 	}
// 	return `Недостатня вага,  ${index}`
// }

// let infoWeight = prompt('Input pls your weight:') //12,9
// let infoHeight = prompt('Input pls your height:') //1,8

// const bmi = calcBMI(infoWeight, infoHeight)
// alert(bmi)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Найменше з чисел​⁡
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
// 	return a > b ? b : a
// }

// console.log(min(2, 5)) // 2
// console.log(min(3, -1)) // -1
// console.log(min(1, 1)) // 1

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Площа прямокутника​⁡
// Напиши функцію getRectArea(dimensions) для обчислення площі
// прямокутника зі сторонами, значення яких будуть передані до
// параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// 	const arr = dimensions.split(' ')
// 	return Number(arr[0]) * Number(arr[1])
// }
// const result = getRectArea('5 12')
// console.log(result)

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Логування елементів​⁡
// Напиши функцію logItems(items), яка отримує масив та використовує
// цикл for, який для кожного елемента масиву буде виводити в консоль
// повідомлення у форматі <номер елемента> - <значення елемента>.
// Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Логування контактів​⁡
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль
// ім'я та телефонний номер користувача. У параметри names та phones
// будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Пошук найбільшого елемента​⁡
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше
// число в масиві.

// function findLargestNumber(numbers) {
// 	let max = numbers[0]
// 	for (const number of numbers) {
// 		if (number > max) {
// 			max = number
// 		}
// 	}
// 	// for (let i = 0; i < numbers.length; i++) {
// 	//     const number = numbers[i]

// 	// }
// 	return max
// }

// for (let i = 0; i < 10; i++) {
// 	const pow = i * i
// 	console.log('pow', pow)
// }

// let i = 0
// i = i + 1
// i += 1
// i++

// i = i - 1
// i -= 1
// i--

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])) // 94
// console.log(findLargestNumber([49, 4, 7, 12])) // 49

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Середнє значення​⁡
// Напишіть функцію calAverage() яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення. Усі аргументи будуть
// лише числами.

// function calAverage() {
// 	// const arrArg = Array.from(arguments)
// 	const newArr = [...arguments]
// 	console.log('newArr', newArr)
// 	//spread
// 	// let args = [...arguments]
// }

// function calAverage(...arrArg) {
// 	let result = 0

// 	for (const value of arrArg) {
// 		result += value
// 	}
// 	return result / arrArg.length
// }

// function calAverage() {
// 	let total = 0
// 	for (let i = 0; i < arguments.length; i++) {
// 		total += arguments[i]
// 	}
// 	return total / arguments.length
// }

// // function calAverage() {
// // 	const arrArg = Array.from(arguments)

// // }
// const result = calAverage(1, 2, 3, 4)
// console.log(result) // 2.5
// console.log(calAverage(14, 8, 2, 4, 5, 65, 6)) // 8
// console.log(calAverage(27, 43, 2, 8)) // 23.2

// const number = 10
// const str = 'Alex'

// const arr = [1,2,3,4,4]
// const arr2 = [...arr]

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Форматування часу​⁡
// Напиши функцію formatTime(minutes) яка переведе значення minutes
// (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// console.log(formatTime(70)) // "01:10"
// console.log(formatTime(450)) // "07:30"
// console.log(formatTime(1441)) // "24:01"

// ​‌‍‌⁡⁢⁣⁣‍‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Колекція курсів (𝗶𝗻𝗰𝗹𝘂𝗱𝗲𝘀, 𝗶𝗻𝗱𝗲𝘅𝗢𝗳, 𝗽𝘂𝘀𝗵 і т. д.)⁡​
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції courses
// removeCourse(name) - видаляє курс із колекції courses
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

// function addCourse(name) {
// 	if (courses.includes(name)) {

// 		console.log('У вас уже есть такой курс')
// 	} else {

// 		courses.push(name)
// 	}
// }

// function removeCourse(name) {
// 	if (courses.includes(name)) {
// 		const index = courses.indexOf(name)
// 		courses.splice(index, 1)
// 	} else {
// 		console.log(`Курса з імʼям ${name} не знайдено`)
// 	}
// }

// function updateCourse(oldName, newName) {
// 	if (courses.includes(oldName)) {
// 		const index = courses.indexOf(oldName)
// courses.splice(index, 1, newName)
// 	} else {
// 		console.log(`Курса з імʼям ${oldName} не знайдено`)
// 	}
// }

// addCourse('Express')
// // console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS') // 'У вас уже есть такой курс'
// addCourse('HTML') // 'У вас уже есть такой курс'
// console.log(courses)

// removeCourse('React')
// // console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue') // 'Курс с таким имененем не найден'
// console.log(courses)

// updateCourse('HTML', 'NestJS')
// console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// updateCourse('NestJS', 'html')
// console.log(courses)
