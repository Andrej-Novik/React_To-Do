import styles from "./styles.module.scss"
import { Field, reduxForm } from "redux-form";
import React, { useState } from "react"

const UserModal = (props) => {

	let [lastName, setlastName] = useState("")
	
	const statusChange = (e) => {
		setlastName(e.currentTarget.value)
	}

	return (
		<form className={styles.modal} onSubmit={props.handleSubmit}>
			<span onClick={props.modalDeactivation} className={styles.close}>X</span>
			<div className={styles.firstName}>
				<Field component="input" name="newLastName" placeholder="last name"/>
			</div>
			<div className={styles.lastName}>
				<Field component="input" name="newFirstName" placeholder="first name"/>
			</div>
			<div className={styles.buttons}>
				<button className={styles.keep}>keep</button>
			</div>
		</form>
	)
}

export default reduxForm({form: 'addUserForm'})(UserModal)
