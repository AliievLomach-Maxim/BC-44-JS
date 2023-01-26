import './style.css'
import { getProducts } from './getProducts'
import { createCardProduct, productsContainer } from './createCardProduct'

const createProductList = (usersArr) => {
	const newUsersArr = usersArr.map(({ title, description, images }) => {
		return createCardProduct(title, description, images)
	})

	productsContainer.innerHTML = newUsersArr.join('')
}

getProducts(createProductList)

export const addCardDom = (card) => {
	productsContainer.insertAdjacentHTML(
		'afterbegin',
		createCardProduct(card.title, card.description, card.images)
	)
}
