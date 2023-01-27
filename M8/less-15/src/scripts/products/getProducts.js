import axios from 'axios'

const BASE_URL = 'https://api.escuelajs.co/api/v1'

const instance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1',
	headers: { accept: '*/*', 'Content-Type': 'application/json' },
})
// export  function getProducts(clb) {
// 	fetch(`${BASE_URL}/products`)
// 		.then((response) => {
// 			const result = response.json()
// 			return result
// 		})
// 		.then((data) => {
// 			console.log('data', data)
// 			clb(data)
// 		})
// 		.catch((error) => {
// 			console.log('error', error)
// 		})
// }

// export function addCard(newCard, addCardDom) {
// 	const options = {
// 		method: 'POST',
// 		body: JSON.stringify(newCard),
// 		headers: {
// 			accept: '*/*',
// 			'Content-Type': 'application/json',
// 		},
// 	}

// 	fetch(`${BASE_URL}/products/`, options)
// 		.then((resp) => resp.json())
// 		.then((responseCard) => {
// 			addCardDom(responseCard)
// 		})
// }
// async await=>

// export async function getProducts(clb) {
// 	try {
// 		const response = await fetch(`${BASE_URL}/products`)
// 		const result = await response.json()
// 		if (!response.ok) {
// 			throw new Error('sorry you have error')
// 		}
// 		clb(result)
// 	} catch (error) {
// 		console.log('error', error)
// 	}
// }

// export async function addCard(newCard, addCardDom) {
// 	const options = {
// 		method: 'POST',
// 		body: JSON.stringify(newCard),
// 		headers: {
// 			accept: '*/*',
// 			'Content-Type': 'application/json',
// 		},
// 	}

// 	try {
// 		const response = await fetch(`${BASE_URL}/products/`, options)
// 		const result = await response.json()
// 		if (!response.ok) {
// 			throw new Error(result.message[0])
// 		}
// 		addCardDom(result)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// export async function addCard(newCard, id, addCardDom) {
// 	const options = {
// 		method: 'PUT',
// 		body: JSON.stringify(newCard),
// 		headers: {
// 			accept: '*/*',
// 			'Content-Type': 'application/json',
// 		},
// 	}

// 	try {
// 		const response = await fetch(`${BASE_URL}/users/${id}`, options)
// 		const result = await response.json()
// 		if (!response.ok) {
// 			console.log('result', result)
// 			throw new Error(result)
// 		}
// 		console.log('result', result)
// 		// addCardDom(result)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// ====axios

export async function getProducts(clb) {
	try {
		const response = await instance.get(`/products`)
		if (response.statusText !== 'OK') {
			throw new Error('sorry you have error')
		}
		clb(response.data)
	} catch (error) {
		console.log('error', error)
	}
}

export async function addCard(newCard, addCardDom) {
	try {
		const response = await instance.post(`/products/`, newCard)
		if (response.message) {
			throw new Error(response.message)
		}
		addCardDom(response.data)
	} catch (error) {
		console.log(error)
	}
}
