import styles from "./styles.module.scss"

let users = [
	{ id: 1, firstName: 'Ivan', lastName: 'Nefedov' },
	{ id: 2, firstName: 'Nikita', lastName: 'Zalubov' },
	{ id: 3, firstName: 'Andrew', lastName: 'Taranow' },
	{ id: 4, firstName: 'Mihail', lastName: 'Ptuskin' },
	{ id: 5, firstName: 'Artem', lastName: 'Haliman' }
]

let usersList = users.map((user) => {
	return (
		<li key={user.id}> {user.firstName} { user.lastName }</li>
	)
})


const Users = () => {
	return (
		<div className={styles.users}>
			{ usersList}
		</div>
	)
}

export default Users