// ⁡⁣⁣⁢​‌‌‍Модуль 1. Заняття 1. Змінні, типи та оператори⁡​⁡

// ​‌‌‍⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Математичні оператори​⁡​
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47
// const grapes = 135

// const sum = apples + grapes //=47 + 135 = 182
// const def = apples - grapes

// // console.log('Сума:', apples + grapes)
// console.log('Сума:', sum)
// console.log('Різниця:', def)

// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Комбіновані оператори​⁡
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100
// // students = students + 2
// // students += 2
// // students *= 2
// // students = students * 2

// console.log(students)

// // let vs const
// let age = 10
// const name = 'Alex'

// age = 100
// name = 'Maxim'

// console.log('age', age)
// console.log('name', name)

// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Пріоритет операторів​⁡
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5
// console.log(result)

// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Класс 𝗠𝗮𝘁𝗵​⁡
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 2.4

// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))

// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Шаблонні рядки​⁡
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems'
// const repairBots = 150
// const defenceBots = 50
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`

// console.log(message) // "Cyberdyne Systems has 200 bots in stock"

// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Методи рядків та чейнінг​⁡
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити
// вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа,
// а в вигляді рядків (спеціально для завдання).
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3'
// let height = '1.75'

// // const weightNum = Number.parseFloat(weight)
// // const x = weight[weight.length - 1]
// // const numberWeight = weightNum + '.' + x
// // console.log('numberWeight', Number(numberWeight))
// const newWeight = Number(weight.replace(',', '.'))

// // const index = newWeight / height ** 2
// // const index = newWeight / (height * height)
// const index = newWeight / Math.pow(height, 2)

// console.log(index.toFixed(1))
// .toFixed(1)
// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Оператори порівняння та приведення типів​⁡
// Яким буде результат виразів?

// console.log(5 > 4) //true

// console.log(10 >= '7x') //false

// console.log('112' > '12') //false

// console.log('2' < '12') //false

// console.log('4' == 4) //true

// console.log('6' === 6) //false

// console.log('false' === false) //false

// console.log(1 == true) //true

// console.log(1 === true) //false

// console.log('0' == false) //0 == 0

// const str = 10

// console.log('str', String(str))
// console.log('str', Boolean(str))
// ''
// 0
// null
// undefined
// NaN
// false

// console.log('0' === false)

// console.log('Papaya' < 'papaya')
// // console.log('P'.charCodeAt())
// // console.log('p'.charCodeAt())

// console.log('Papaya' === 'papaya')

// console.log(NaN >= false) //NaN == 0
// // console.log('first', typeof NaN)
// console.log(undefined == NaN)
// console.log(NaN == NaN)

// console.log('RESULT', Boolean(NaN))
// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Логічні оператори​⁡
// Яким буде результат виразів?

// console.log(3 && false && 30)

// console.log(false && 3)

// console.log(true && 4 && 'kiwi')

// console.log(true && true && 'kiwi')

// console.log(false || 0 || null)

// console.log(3 || false || 4)

// console.log(0 || false || 7)

// console.log(null || 2 || undefined)

// console.log((1 && null && 2) > 0)

// console.log(null || (2 && 3) || 4)

// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Значення за замовчуванням та оператор нульового злиття​⁡
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue,
// якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
// Використовуй оператор ?? (nullish coalescing operator).

const incomingValue = 0
const defaultValue = 10

// const value = incomingValue ?? defaultValue
// console.log(value)

// ⁡⁢⁣⁣​‌‍‌------------𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟬 - Оператор % та методи рядків​⁡
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441

const minutes = totalMinutes % 60
const hours = Number.parseInt(totalMinutes / 60)
const strHours = `${hours}`.padStart(2, 0)
console.log(`${strHours}:${minutes}`)
