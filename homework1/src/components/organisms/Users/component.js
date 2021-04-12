import User from "../../moleculs/User";
import styles from "./styles.module.scss";

const Users = ({ users, onEdit }) => {
  return (
    <div className={styles.users}>
      {users.map((user) => {
        return <User key={user.id} user={user} onEdit={onEdit} />;
      })}
    </div>
  );
};

export default Users;
