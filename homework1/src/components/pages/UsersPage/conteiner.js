import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal, setCurrentUser, deleteUser, saveUser } from '../../../redux/actions/users'
import UsersPage from '.'

export const UsersPageContainer = () => {
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.usersPage.isModalOpen)
	const users = useSelector(state => state.usersPage.users)
	const currentUser = useSelector(state => state.usersPage.currentUser)

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
