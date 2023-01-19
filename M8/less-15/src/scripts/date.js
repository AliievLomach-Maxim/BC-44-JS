const newYearDate = new Date('January 1, 2024 00:00:00')

const newYearTimer = document.querySelector('.timer')

setInterval(() => {
	const nowDate = new Date()
	const timer = newYearDate - nowDate
	const seconds = Math.floor((timer / 1000) % 60)
	const minutes = Math.floor((timer / 1000 / 60) % 60)
	const hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
	const days = Math.floor(timer / (1000 * 60 * 60 * 24))
	newYearTimer.innerHTML = `<h1>До Нового 2024 року залишилось:</h1><h2> ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд</h1>`
	// console.log(
	// 	`До Нового 2024 року залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`
	// )
}, 1000)
