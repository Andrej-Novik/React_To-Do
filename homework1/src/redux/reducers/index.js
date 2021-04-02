import { combineReducers } from 'redux'
import usersPage from './usersPage'
import { reducer as formReducer } from "redux-form"

const reducers = combineReducers({
	usersPage,
	form: formReducer
})

export default reducers