import UsersModal from "../../organisms/UserModal";
import Users from "../../organisms/Users";
import styles from "./styles.module.scss";

const UsersPage = ({ onOpen }) => {
  return (
    <div className={styles.userPage}>
      <Users />
      <UsersModal />
      <div className={styles.addUser} onClick={onOpen}>
        <span>ADD NEW USER</span>
      </div>
    </div>
  );
};

export default UsersPage;
