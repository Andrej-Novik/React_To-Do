import { useDispatch } from 'react-redux'
import { openModal } from '../../../redux/actions/users'
import UsersPage from '.'

export const UsersPageContainer = () => {
	const dispatch = useDispatch()
	
	const onOpen = () => {
		dispatch(openModal())
	}
	return (
		<UsersPage
			onOpen={onOpen}/>
	)
}

export default UsersPageContainer
