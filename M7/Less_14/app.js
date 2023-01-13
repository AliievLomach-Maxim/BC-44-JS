// // ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍Модуль 𝟳. Заняття 𝟭4.  throttle/debounce & lazy-loading
// const main = document.querySelector('.main')

// const makeMarcap = function () {
// 	// const arr = []
// 	for (let i = 1; i < 100; i++) {
// 		const imgUrl = `https://picsum.photos/id/${Math.round(
// 			Math.random() * 1000
// 		)}/300/200`
// 		console.log('imgUrl :>> ', imgUrl)
// 		const img = `<img data-src='${imgUrl}' alt='Random Image' class='lazyload' />`
// 		// arr.push(img)

// 		main.insertAdjacentHTML('beforeend', img)
// 	}
// 	// console.log(arr.length)
// 	// return arr
// }

// makeMarcap()

// // main.insertAdjacentHTML('beforeend', makeMarcap().join(''))

const main = document.querySelector('.main')

const makeMarcap = function () {
	for (let i = 1; i < 100; i++) {
		const imgUrl = `https://picsum.photos/id/${Math.round(
			Math.random() * 1000
		)}/300/200`
		const img = `<img data-src='${imgUrl}' alt='Random Image' class='lazyload' />`

		main.insertAdjacentHTML('beforeend', img)
	}
}

makeMarcap()
