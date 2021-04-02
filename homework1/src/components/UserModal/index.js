import styles from "./styles.module.scss"

const UserModal = () => {
	return (
		<div className={styles.modal}>
			<div className={styles.firstName}>
				<input />
			</div>
			<div className={styles.lastName}>
				<input />
			</div>
			<div className={styles.buttons}>
				<button className={styles.keep}>keep</button>
				<button className={styles.delete}>delete</button>
			</div>
		</div>
	)
}

export default UserModal
