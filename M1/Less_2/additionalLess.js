// const arr = ['Alex', 'Maxim', 'Oleg', 'Vasyl']
// console.log('last index of array>>>', arr[arr.length - 1])

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟭 - Цикл 𝗳𝗼𝗿​⁡
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max,
// но только если число кратное 5.

// 1 - вивести всі числа від min до max
// 2 - перевірити на кратність 5

const max = 111
const min = 19

// for (i = min; i <= max; i += 1) {
// 	// 21/5 = 1
// 	// 22/5 = 2
// 	// 23/5 = 3
// 	// 24/5=4
// 	// 25/5 = 0
// 	if (i % 5 === 0) {
// 		console.log('i', i)
// 	}
// }

// for (let i = min; i <= max; i++) {
// 	if (i % 2 === 0) {
// 		console.log('це парне число = ', i)
// 	} else {
// 		console.log('Це непарне чило>>>', i)
// 	}
// }

// ⁡⁢⁣⁣​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟮 - Ввод пользователя и ветвления​⁡
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('input pls name')

// if (login === 'Admin') {
// 	for (let i = 3; i > 0; i--) {
// 		const password = prompt(`Input pls password, you have ${i} attempt`)
// 		if (password === 'I am Admin') {
// 			console.log('Hello, Admin')
// 			break
// 		} else {
// 			console.log(`Password not correct, you have ${i - 1} attempt`)
// 		}
// 	}
// } else if (login === '' || login === null) {
// 	console.log('Cancel')
// } else {
// 	console.log('Я вас не знаю')
// }
