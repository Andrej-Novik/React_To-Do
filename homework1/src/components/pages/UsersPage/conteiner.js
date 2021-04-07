import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal, setCurrentUser, deleteUser, saveUser } from '../../../redux/actions/users'
import {getUsers, getIsModelOpen, getCurrentUser} from "../../../redux/selectors/users"
import UsersPage from '.'

export const UsersPageContainer = () => {
	//redax dev tools
	const dispatch = useDispatch()
	const isOpen = useSelector(getIsModelOpen)
	const users = useSelector(getUsers)
	const currentUser = useSelector(getCurrentUser)

	const onOpen = () => {
		dispatch(openModal())
	}
	const onClose = () => {
		dispatch(closeModal())
	}
	const onEdit = (id) => {
		const clickedUser = users.find(user => user.id === id)
		dispatch(setCurrentUser(clickedUser.id, clickedUser.firstName, clickedUser.lastName))
	}
	const onDelete = (id) => {
		dispatch(deleteUser(id))
	}
	const onChange = (id, firstName, lastName) => {
		dispatch(saveUser(id, firstName, lastName))
	}

	return (
		<UsersPage
			users={users}
			isOpen={isOpen}
			currentUser={currentUser}
			onOpen={onOpen}
			onEdit={onEdit}
			onClose={onClose}
			onDelete={onDelete}
			onChange={onChange}
		/>
	)
}

export default UsersPageContainer
