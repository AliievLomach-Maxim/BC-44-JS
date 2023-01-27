import { addCard } from './getProducts'
import { addCardDom } from './products'

export const productsContainer = document.querySelector('.products')

const formEl = document.querySelector('.create-card')
formEl.addEventListener('submit', handleSubmit)

export const createCardProduct = (title, description, images) => `
<div class='card'>
    <h1>${title}</h1>
    <h3>${description}</h3>
    <div class='content-card'>
        <img src=${images[0]} width='300'/>
    </div>
</div>
`

function handleSubmit(e) {
	e.preventDefault()
	createDataObj(e.target.elements)
}

function createDataObj({ title, price, description, idCard }) {
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
