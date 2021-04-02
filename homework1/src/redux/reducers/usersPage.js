import { ADD_USER, } from '../actionTypes/users'

const initialState = {
	isModalOpen: false,
	openUser: { id: null, firstName: '', lastName: '', },
	users: [
		{ id: 1, firstName: 'Ivan', lastName: 'Nefedov' },
		{ id: 2, firstName: 'Nikita', lastName: 'Zalubov' },
		{ id: 3, firstName: 'Andrew', lastName: 'Taranow' },
		{ id: 4, firstName: 'Mihail', lastName: 'Ptuskin' },
		{ id: 5, firstName: 'Artem', lastName: 'Haliman' }
	],
}

const users = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			let firstName = action.firstName
			let lastName = action.lastName
			return {
				...state,
				users: [...state.users, {
					id: Date.now(),
					firstName,
					lastName
				}]
			}
		default:
			return state
	}
}

export function addUser(firstName, lastName) {
	return { type: ADD_USER, firstName, lastName }
}

export default users