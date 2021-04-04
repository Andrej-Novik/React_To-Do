import styles from "./styles.module.scss"
import React from "react"

const UserModal = (props) => {
	return (
		<div className={styles.userModal}>
			<form className={styles.form} >
				<span className={styles.close}>X</span>
				<h3>Add user</h3>
				<div className={styles.firstName}>
					<input placeholder="last name"/>
				</div>
				<div className={styles.lastName}>
					<input placeholder="first name"/>
				</div>
				<div className={styles.buttons}>
					<button className={styles.keep}>keep</button>
				</div>
			</form>
		</div>
	)
}

export default UserModal
