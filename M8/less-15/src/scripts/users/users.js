import './style.css'
import { getUsers } from './getUsers'
import { createCardUser, usersContainer } from './createCardUser'

const createUsersList = (usersArr) => {
	const newUsersArr = usersArr.map(({ name, email, phone, website }) => {
		return createCardUser(name, email, phone, website)
	})

	usersContainer.innerHTML = newUsersArr.join('')
}

// get

getUsers(createUsersList)
