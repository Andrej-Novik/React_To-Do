import styles from "./styles.module.scss"

const User = ({user, onEdit}) => {
	return (
		<li className={styles.user}>
			<div>
				{user.firstName}  {user.lastName}
			</div>
			<span
				className={styles.edit}
				onClick={() => onEdit(user.id)}
			>edit</span>
		</li>
	)
}

export default User