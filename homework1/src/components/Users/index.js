import styles from "./styles.module.scss"

const Users = (props) => {
	
	let usersList = props.users.map((user) => {
		return (
			<li key={user.id}>
				<div className={styles.user}>
					{user.firstName}  {user.lastName}
				</div>
				<span onClick={() => props.editUser(user.id)} className={styles.edit}>edit</span>
			</li>
		)
	})

	return (
		<div className={styles.users}>
			{ usersList}
		</div>
	)
}

export default Users