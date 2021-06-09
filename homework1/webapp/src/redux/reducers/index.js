import { combineReducers } from 'redux'
import usersPage from './usersPage'
import loginPage from './loginPage'

const reducers = combineReducers({
	usersPage,
	loginPage
})

export default reducers