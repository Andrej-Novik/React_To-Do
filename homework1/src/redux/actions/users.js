import { OPEN_MODAL, CLOSE_MODAL, DELETE_USER, SET_CURRENT_USER, CHANGE_USER, ADD_USER} from "../actionTypes/users"

export function openModal() {
	return { type: OPEN_MODAL }
}
export function closeModal() {
	return { type: CLOSE_MODAL }
}
export function setCurrentUser(id, firstName, lastName) {
	return { type: SET_CURRENT_USER, id, firstName, lastName }
}
export function deleteUser(id) {
	return { type: DELETE_USER, id }
}
export function saveUser(id, firstName, lastName) {
	if (id) {
		return { type: CHANGE_USER, id, firstName, lastName }
	}	
	else {
		return { type: ADD_USER, firstName, lastName }
	}	
}
