const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function getUsers(clb) {
	fetch(`${BASE_URL}/users`)
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
