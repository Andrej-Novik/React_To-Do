import ChangeUser from "../ChangeUser"
import AddUser from "./AddUser"
import styles from "./styles.module.scss"
import User from "./User"

let users = [
	{ id: 1, firstName: 'Ivan', lastName: 'Nefedov' },
	{ id: 2, firstName: 'Nikita', lastName: 'Zalubov' },
	{ id: 3, firstName: 'Andrew', lastName: 'Taranow' },
	{ id: 4, firstName: 'Mihail', lastName: 'Ptuskin' },
	{ id: 5, firstName: 'Artem', lastName: 'Haliman' }
]

let usersList = users.map((user) => {
	return (
		<User key={user.id} firstName={ user.firstName } lastName={ user.lastName }/>
	)
})


const Users = () => {
	return (
		<div className={styles.users}>
			{ usersList}
			<AddUser />
			<ChangeUser />
		</div>
	)
}

export default Users