import User from "../../moleculs/User"
import styles from "./styles.module.scss"

const Users = ({users, onEdit}) => {
	let usersList = users.map((user) => {
		return (
			<User
				key={user.id}
				user={user}
				onEdit={onEdit}
			/>
		)
	})
	return (
		<div className={styles.users}>
			{ usersList}
		</div>
	)
}

export default Users