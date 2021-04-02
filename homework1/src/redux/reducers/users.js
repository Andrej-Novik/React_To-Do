import { ADD_USER, } from '../actionTypes/users'

const initialState = {
	isModalOpen: false,
	openUser: { id: null, firstName: '', lastName: '', },
	list: [
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
			return (
			[...state,
		{ id: 6, firstName: action.payload.firstName, lastName: action.payload.lastName }])
		default: return state
	}
}

export default users