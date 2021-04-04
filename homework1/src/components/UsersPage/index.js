import UserModal from "../UserModal"
import Users from "../Users"
import styles from "./styles.module.scss"

let state = {
	isModalOpen: true,
	users: [
		{ id: 1, firstName: 'Ivan', lastName: 'Nefedov' },
		{ id: 2, firstName: 'Nikita', lastName: 'Zalubov' },
		{ id: 3, firstName: 'Andrew', lastName: 'Taranow' },
		{ id: 4, firstName: 'Mihail', lastName: 'Ptuskin' },
		{ id: 5, firstName: 'Artem', lastName: 'Haliman' }
	]
}
const UsersPage = () => {
	return (
		<div className={styles.userPage}>
			<Users users={state.users}/>
			{
				state.isModalOpen
					? <UserModal/>
					: <div className={styles.addUser}>
						<span>+</span>
					</div>
			}
		</div>
	)
}

export default UsersPage