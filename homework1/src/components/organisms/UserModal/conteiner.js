import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModal, deleteUser, saveUser } from '../../../redux/actions/users'
import UsersModal from '.'

export const UsersModalContainer = () => {
	const dispatch = useDispatch()
	const isOpen = useSelector(state => state.usersPage.isModalOpen)
	const currentUser = useSelector(state => state.usersPage.currentUser)

	const onOpen = () => {
		dispatch(openModal())
	}
	const onClose = () => {
		dispatch(closeModal())
	}
	const onDelete = (id) => {
		dispatch(deleteUser(id))
	}
	const onChange = (id, firstName, lastName) => {
		dispatch(saveUser(id, firstName, lastName))
	}
	return (
		<UsersModal
			isOpen={isOpen}
			currentUser={currentUser}
			onClose={onClose}
			onDelete={onDelete}
			onChange={onChange}
		/>
	)
}

export default UsersModalContainer
