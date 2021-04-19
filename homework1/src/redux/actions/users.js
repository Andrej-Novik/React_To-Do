import {
  OPEN_MODAL,
  CLOSE_MODAL,
  DELETE_USER,
  SET_CURRENT_USER,
  CHANGE_USER,
  ADD_USER,
  CHANGE_USERS_LOADER,
	ERROR_GETTING_USERS,
	USER_LIST_SUCCESS
} from "../actionTypes/users";
import Repository from '../../repository'

export function openModal() {
  return { type: OPEN_MODAL };
}
export function closeModal() {
  return { type: CLOSE_MODAL };
}
export function setCurrentUser(id, firstName, lastName) {
  return { type: SET_CURRENT_USER, id, firstName, lastName };
}
export function deleteUser(id) {
  return { type: DELETE_USER, id };
}
export function saveUser(id, firstName, lastName) {
  if (id) {
    return { type: CHANGE_USER, id, firstName, lastName };
  } else {
    return { type: ADD_USER, firstName, lastName };
  }
}
export function userLoader(value) {
  return { type: CHANGE_USERS_LOADER, value };
}
export function userListError(value) {
  return { type: ERROR_GETTING_USERS, value };
}
export function userListSuccess(value) {
	console.log(value)
	
  return { type: USER_LIST_SUCCESS, value };
}

export const getUsersList = () => async (dispatch) => {
	dispatch(userLoader(true));
	
  const { value, error } = await Repository.APICore.getUserList();
  if (error || !value) {
    dispatch(userListError(true));
  } else dispatch(userListSuccess(value));

  dispatch(userLoader(false));
};
