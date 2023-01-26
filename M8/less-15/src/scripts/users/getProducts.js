import {}

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

function addCard(newCard) {
	console.log('newCard', JSON.stringify(newCard))
	const options = {
		method: 'POST',
		body: JSON.stringify(newCard),
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		},
	}

	return fetch(`${BASE_URL}/products/`, options).then((resp) => resp.json())
}

const formEl = document.querySelector('.create-card')

formEl.addEventListener('submit', createNewCard)

function createNewCard(e) {
	e.preventDefault()
	const title = e.target.elements.title.value
	const price = +e.target.elements.price.value
	const description = e.target.elements.description.value
	const categoryId = 1
	const images = [
		'https://cdn.pixabay.com/photo/2022/08/19/14/06/waterfall-7397017_1280.jpg',
	]

	const objData = { title, price, description, categoryId, images }
	addCard(objData).then((response) => )
}

function addNewCard(card) {
	const markup =
}

// # Body
// {
//   "title": "New Product",
//   "price": 10,
//   "description": "A description",
//   "categoryId": 1,
//   "images": ["https://placeimg.com/640/480/any"]
// }
// {
// categoryId: 1
// description: 'asd'
// images: ['https://placeimg.com/640/480/any']
// price: 'asd'
// title: 'asd'}

// [GET] https://api.escuelajs.co/api/v1/products
// const URL = 'https://api.escuelajs.co/api/v1/products';

// [
// 	{
// 		id: 4,
// 		title: 'Handmade Fresh Table',
// 		price: 687,
// 		description: 'Andy shoes are designed to keeping in...',
// 		category: {
// 			id: 5,
// 			name: 'Others',
// 			image: 'https://placeimg.com/640/480/any?r=0.591926261873231',
// 		},
// 		images: [
// 			'https://placeimg.com/640/480/any?r=0.9178516507833767',
// 			'https://placeimg.com/640/480/any?r=0.9300320592588625',
// 			'https://placeimg.com/640/480/any?r=0.8807778235430017',
// 		],
// 	},
// 	// ...
// ]
