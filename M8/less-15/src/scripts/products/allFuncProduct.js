import './style.css'

const BASE_URL = 'https://api.escuelajs.co/api/v1'

function getProducts(clb) {
	fetch(`${BASE_URL}/products`)
		.then((response) => {
			const result = response.json()
			return result
		})
		.then((data) => {
			createProductList(data)
		})
		.catch((error) => {
			console.log('error', error)
		})
}

function addCard(newCard, clb) {
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
			clb(responseCard)
		})
}

const productsContainer = document.querySelector('.products')

getProducts(createProductList)

const formEl = document.querySelector('.create-card')

formEl.addEventListener('submit', handleSubmit)

// ======= add new Card Dom
function addCardDom(card) {
	productsContainer.insertAdjacentHTML(
		'afterbegin',
		createCardProduct(card.title, card.description, card.images)
	)
}
function handleSubmit(e) {
	e.preventDefault()
	createDataObj(e.target.elements)
}

function createDataObj({ title, price, description }) {
	addCard(
		{
			title: title.value,
			price: price.value,
			description: description.value,
			categoryId: 1,
			images: [
				'https://cdn.pixabay.com/photo/2022/08/19/14/06/waterfall-7397017_1280.jpg',
			],
		},
		addCardDom
	)
}

function createProductList(usersArr) {
	const newUsersArr = usersArr.map(({ title, description, images }) => {
		return createCardProduct(title, description, images)
	})

	productsContainer.innerHTML = newUsersArr.join('')
}

function createCardProduct(title, description, images) {
	return `
<div class='card'>
    <h1>${title}</h1>
    <h3>${description}</h3>
    <div class='content-card'>
        <img src=${images[0]} width='300'/>
    </div>
</div>
`
}
