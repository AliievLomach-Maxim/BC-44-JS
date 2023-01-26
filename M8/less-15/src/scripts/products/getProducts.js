const BASE_URL = 'https://api.escuelajs.co/api/v1'

export function getProducts(clb) {
	fetch(`${BASE_URL}/products`)
		.then((response) => {
			const result = response.json()
			return result
		})
		.then((data) => {
			console.log('data', data)
			clb(data)
		})
		.catch((error) => {
			console.log('error', error)
		})
}

export function addCard(newCard, addCardDom) {
	const options = {
		method: 'POST',
		body: JSON.stringify(newCard),
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		},
	}

	fetch(`${BASE_URL}/products/`, options)
		.then((resp) => resp.json())
		.then((responseCard) => {
			addCardDom(responseCard)
		})
}
