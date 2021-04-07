import UserModal from "../../organisms/UserModal"
import Users from "../../organisms/Users"
import styles from "./styles.module.scss"

const UsersPage = ({ users, isOpen, currentUser, onOpen, onClose, onEdit, onDelete, onChange }) => {
	return (
		<div className={styles.userPage}>
			<Users
				users={users}
				onEdit={onEdit}
			/>
			<UserModal
				currentUser={currentUser}
				isOpen={isOpen}
				onClose={onClose}
				onDelete={onDelete}
				onChange={onChange}
			/>
			<div
				className={styles.addUser}
				onClick={ onOpen }
			>
				<span>ADD NEW USER</span>
			</div>
		</div>
	)
}

export default UsersPage