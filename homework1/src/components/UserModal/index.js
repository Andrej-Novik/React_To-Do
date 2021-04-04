import styles from "./styles.module.scss"
import React, { useEffect, useState } from "react"

const UserModal = (props) => {

	let [firstName, setFirstName] = useState(props.currentUser.firstName)
	let [lastName, setLastName] = useState(props.currentUser.lastName)

	useEffect(() => {
		setFirstName(props.currentUser.firstName)
		setLastName(props.currentUser.lastName)
	}, [props.currentUser])

	const save = () => {
		props.onSave(firstName, lastName, props.currentUser.id)
	}

	return props.isModalOpen &&(
		<div className={styles.userModal }>
			<div className={styles.form} >
			<span onClick={props.onClose} className={styles.close}>X</span>
			{
				props.currentUser.id ?  <h3>Edit user</h3> : <h3>Add user</h3>
			}
				<div className={styles.firstName}>
				<input
					value={lastName}
					placeholder="last name"
					onChange={(e) => {
						setLastName(e.target.value)
					}}/>
				
				</div>

				<div className={styles.lastName}>
				<input
					value={firstName}
					placeholder="first name"
					onChange={(e) => {
						setFirstName(e.target.value)
					}}/>
				</div>
				
				<div className={styles.buttons}>
					<button onClick={save} className={styles.keep}>keep</button>
					<button onClick={() => props.deleteUser(props.currentUser.id)} className={styles.delete}>delete</button>
				</div>
			</div>
		</div>
	)
}

export default UserModal
