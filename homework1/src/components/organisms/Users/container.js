import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../../../redux/actions/users'
import Users from './component'

export const UsersContainer = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.usersPage.users)

	const onEdit = (id) => {
		const clickedUser = users.find(user => user.id === id)
		dispatch(setCurrentUser(clickedUser.id, clickedUser.firstName, clickedUser.lastName))
	}
	
	return (
		<Users
			users={users}
			onEdit={onEdit}
		/>
	)
}

export const container =  UsersContainer
