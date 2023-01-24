const API_KEY = '7391ec9459644ca0a76cb25df2a23597'
const URL = 'https://newsapi.org/'

export function getNews(
	selectedCategory,
	createNews,
	createPagination,
	page = 1
) {
	const pageSize = 5
	return fetch(
		`${URL}v2/top-headlines?country=ua&category=${selectedCategory}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.status)
			}
			const answer = response.json()
			return answer
		})
		.then((data) => {
			const total = data.totalResults
			const pages = total / pageSize
			createPagination(pages)
			createNews(data.articles)
		})

		.catch((reject) => console.log('reject :>> ', reject))
}
