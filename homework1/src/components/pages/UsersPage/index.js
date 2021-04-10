import UsersModalContainer from "../../organisms/UserModal/conteiner"
import UsersContainer from "../../organisms/Users/conteiner"
import styles from "./styles.module.scss"

const UsersPage = ({ onOpen}) => {
	return (
		<div className={styles.userPage}>
			<UsersContainer />
			<UsersModalContainer />
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