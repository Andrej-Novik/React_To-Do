import { useState } from "react"
import UserModal from "../UserModal"
import Users from "../Users"
import styles from "./styles.module.scss"
import { v4 as uuidv4 } from 'uuid';

const UsersPage = () => {
	const [isOpen, setIsOpen] = useState(false)

	let [usersList, setUsersList] = useState([
		{ id: uuidv4(), firstName: 'Ivan', lastName: 'Nefedov' },
		{ id: uuidv4(), firstName: 'Nikita', lastName: 'Zalubov' },
		{ id: uuidv4(), firstName: 'Andrew', lastName: 'Taranow' },
		{ id: uuidv4(), firstName: 'Mihail', lastName: 'Ptuskin' },
		{ id: uuidv4(), firstName: 'Artem', lastName: 'Haliman' }
	])

	let [currentUser, setCurrentUser] = useState({})

	const editUser = (id) => {
		const thisUser = usersList.find(user => user.id === id)
		setCurrentUser(thisUser)
		setIsOpen(true)
	}
	const onSave = (firstName, lastName, id) => {
		if (firstName && lastName) {
			if (id) {
				setUsersList(
					usersList.map(user => user.id === id ?
						{ ...user, firstName, lastName } : user)
				)
			}
			else {
				setUsersList([...usersList, {
					firstName,
					lastName,
					id: uuidv4()
				}])
			}
			setIsOpen(false)
			setCurrentUser({})
		}
	}
	const deleteUser = (id) => {
		setUsersList(
			usersList.filter(user => 
				user.id !== id )
		)
		setIsOpen(false)
		setCurrentUser({})
	}
	const onClose = () => {
		setIsOpen(false)
		setCurrentUser({})
	}
	return (
		<div className={styles.userPage}>
			<Users
				users={usersList}
				editUser={editUser}
			/>
			<UserModal
				currentUser={currentUser}
				isModalOpen={isOpen}
				onClose={onClose}
				onSave={onSave}
				editUser={editUser}
				deleteUser={deleteUser}
			/>
			<div onClick={() => setIsOpen(true)} className={styles.addUser}>
				<span>ADD NEW USER</span>
			</div>
		</div>
	)
}

export default UsersPage