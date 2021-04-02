import { useState } from "react"
import UserModal from "../UserModal"
import Users from "../Users"

const UsersPage = (props) => {

	let [isModalActive, setModalActive] = useState(false)

	const modalActivation = () => {
		setModalActive(true)
	}
	const modalDeactivation = () => {
		setModalActive(false)
	}
	let addNewUser = (value) => {
		props.addUser(value.newLastName, value.newFirstName)
		setModalActive(false)
	}

	return (
		<div>
			<Users users={props.users}/>
			{
				isModalActive
					? <UserModal onSubmit={addNewUser} modalDeactivation={ modalDeactivation }/>
				: <div>
					<span onClick={modalActivation}>+</span>
				</div>
				
			}
			
		</div>
	)
}

export default UsersPage