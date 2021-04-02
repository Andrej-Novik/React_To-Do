import styles from "./styles.module.scss"
import { Field, reduxForm } from "redux-form";
import React from "react"
import Input from "../FormsControls/Input";
import { required, maxLengthCreator } from "../../redux/validators"

const maxLength12 = maxLengthCreator(12)

const UserModal = (props) => {
	return (
		<form className={styles.modal} onSubmit={props.handleSubmit}>
			<span onClick={props.modalDeactivation} className={styles.close}>X</span>
			<h3>Add user</h3>
			<div className={styles.firstName}>
				<Field component={Input} validate={[required, maxLength12]} name="newLastName" placeholder="last name"/>
			</div>
			<div className={styles.lastName}>
				<Field component={Input} validate={[required]} name="newFirstName" placeholder="first name"/>
			</div>
			<div className={styles.buttons}>
				<button className={styles.keep}>keep</button>
			</div>
		</form>
	)
}

export default reduxForm({form: 'addUserForm'})(UserModal)
