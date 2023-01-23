const contNews = document.querySelector('.news')
// ['business','general','health','sports']
const API_KEY = '7391ec9459644ca0a76cb25df2a23597'
const URL = 'https://newsapi.org/'
const selector = document.querySelector('#category')
const form = document.querySelector('form')

form.addEventListener('submit', (evt) => {
	evt.preventDefault()
	selectedCategory = evt.target.elements.category.value
	getNews(selectedCategory)
})

function getNews(selectedCategory) {
	return fetch(
		`${URL}v2/top-headlines?country=ua&category=${selectedCategory}&apiKey=${API_KEY}`
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.status)
			}
			// console.log('response :>> ', response)
			const answer = response.json()
			// console.log('answer :>> ', answer)
			return answer
		})
		.then((data) => {
			createNews(data.articles)
		})

		.catch((reject) => console.log('reject :>> ', reject))
}

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
