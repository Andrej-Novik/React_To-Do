import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss"

const UserModal = ({ isOpen, currentUser, onClose, onDelete, onChange }) => {
	let [firstName, setFirstName] = useState(currentUser.firstName)
	let [lastName, setLastName] = useState(currentUser.lastName)

	useEffect(() => {
		setFirstName(currentUser.firstName)
		setLastName(currentUser.lastName)
	}, [currentUser])

	return isOpen &&(
		<div className={styles.userModal }>
			<div className={styles.form} >
				<span
					onClick={onClose}
					className={styles.close}
				>X</span>
				{
					currentUser.id ?  <h3>Edit user</h3> : <h3>Add user</h3>
				}
				<div className={styles.firstName}>
					<input
						value={firstName}
						placeholder="first name"
						onChange={(e) => {
							setFirstName(e.target.value)
						}}
					/>
				</div>
				<div className={styles.lastName}>
					<input
						value={lastName}
						placeholder="last name"
						onChange={(e) => {
							setLastName(e.target.value)
						}}
					/>
				</div>
				<div className={styles.buttons}>
				{
						currentUser.id
							? <button
								disabled={(currentUser.lastName === lastName && currentUser.firstName === firstName) || (!lastName || !firstName) }
								onClick={() => onChange(currentUser.id, firstName, lastName)}
								className={styles.keep}
							>keep</button>
							: <button
								onClick={() => onChange(currentUser.id, firstName, lastName)}
								disabled={!lastName || !firstName}
								className={styles.keep}
							>create</button>
				}
				{
					currentUser.id && <button
						onClick={() => onDelete(currentUser.id)}
						className={styles.delete}
					>delete</button>
				}
				</div>
			</div>
		</div>
	)
}

export default UserModal
