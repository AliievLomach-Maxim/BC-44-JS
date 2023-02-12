const { default: axios } = require('axios')

// let arr = []

// const URL =
// 	'https://newsapi.org/v2/top-headlines?country=us&apiKey=7391ec9459644ca0a76cb25df2a23597'

// fetch(URL)
// 	.then((resolved) => {
// 		// console.log(resolved)
// 		const res = resolved.json()
// 		return res
// 	})
// 	.then((response) => {
// 		// console.log('response :>> ', response)
// 		getData(response)
// 	})
// 	.catch((reject) => {
// 		console.log(reject)
// 	})
// const getURL = async () =>
// async function getURL() {
// 	try {
// 		const resolved = await fetch(URL)
// 		const response = await resolved.json()
// 		getData(response)
// 	} catch (reject) {
// 		console.log(reject)
// 	}
// }
// async function getURL() {
// 	try {
// 		const response = await axios(URL)
// 		getData(response.data.articles)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// .then((resolved) => {
// 	// console.log(resolved)
// 	const res = resolved.json()
// 	return res
// })
// .then((response) => {
// 	// console.log('response :>> ', response)
// 	getData(response)
// })
// .catch((reject) => {
// 	console.log(reject)
// })

// axios(URL).then((res) => {
// 	console.log('res :>> ', res.data)
// 	getData(res.data.articles)
// })
// const divPr = document.querySelector('.products')
// async function getURL() {
// 	try {
// 		const resolved = await fetch(URL)
// 		const response = await resolved.json()
// 		getData(response.articles)
// 	} catch (reject) {
// 		console.log(reject)
// 	}
// }

// function getData(news) {
// 	const markUpCard = news
// 		.map((el) => {
// 			return `<li>${el.author}</li>`
// 		})
// 		.join('')
// 	divPr.innerHTML = markUpCard
// 	console.log(markUpCard)
// 	console.log('news :>> ', news)
// }
// console.log('object')
// getURL()
//===========================

// [GET] https://api.escuelajs.co/api/v1/products
const URL = 'https://api.escuelajs.co/api/v1/products'

// fetch(URL)
// 	.then((resolved) => {
// 		console.log(resolved)
// 		return resolved.json()
// 	})
// 	.then((response) => {
// 		getProducts(response)
// 		console.log(response)
// 	})
// 	.catch((reject) => {
// 		console.log(reject)
// 	})
const divPr = document.querySelector('.products')
const button = document.createElement('button')
const body = document.querySelector('body')
body.insertAdjacentElement('beforebegin', button)
button.addEventListener('click', onBtnClick)

function getProducts(products) {
	const markUpCard = products
		.map((product) => {
			return `<li><h2>${product.title}</h2><img src='${product.images[0]}'/><p>${product.description}</p></li>`
		})
		.join('')
	divPr.innerHTML = markUpCard
}

function onBtnClick() {
	getUrl()
	// axios(URL)
	// 	.then((res) => {
	// 		getProducts(res.data)
	// 	})
	// 	.catch((er) => {
	// 		console.log(er)
	// 	})
}

async function getUrl() {
	try {
		const response = await axios(URL)
		getProducts(response.data)
	} catch (error) {
		console.log(error)
	}
}
