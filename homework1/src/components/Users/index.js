import styles from "./styles.module.scss"

const Users = (props) => {
	let usersList = props.users.map((user) => {
		return (
			<li key={user.id}> {user.firstName} { user.lastName }</li>
		)
	})

	return (
		<div className={styles.users}>
			{ usersList}
		</div>
	)
}

export default Users