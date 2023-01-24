import { getNews } from './getNews'

const contNews = document.querySelector('.news')
const form = document.querySelector('form')
const list = document.querySelector('.pagination')

let selectedCategory = ''

form.addEventListener('submit', (evt) => {
	evt.preventDefault()
	selectedCategory = evt.target.elements.category.value
	getNews(selectedCategory, createNews, createPagination)
})

function createNews(news) {
	const markupNews = news
		.map((article) => {
			return `<li>
		<h2>${article.title}</h2>
		<p>${article.description}</p>
		</li>`
		})
		.join('')
	contNews.innerHTML = markupNews
}

function createLi(numberPage) {
	const markupLi = `<li class='pagination'><button>${numberPage}</button></li>`
	list.insertAdjacentHTML('beforeend', markupLi)
}

function createPagination(pages) {
	list.innerHTML = ''
	for (let i = 1; i <= pages; i++) {
		createLi(i)
	}
}

list.addEventListener('click', handleClick)
function handleClick(ev) {
	if (ev.target.nodeName === 'BUTTON') {
		const number = Number(ev.target.textContent)
		getNews(selectedCategory, createNews, createPagination, number)
	}
}
