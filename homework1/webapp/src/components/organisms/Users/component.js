import { useEffect } from "react";
import Loader from "../../atoms/Loader";
import User from "../../moleculs/User";
import styles from "./styles.module.scss";

const Users = ({ users, userLoader, isError, onEdit, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.users}>
      {isError ? (
        <div className={styles.error}>USERS NOT FAUND</div>
      ) : userLoader ? (
        <Loader />
      ) : (
        users.map((user) => {
          return <User key={user.id} user={user} onEdit={onEdit} />;
        })
      )}
    </div>
  );
};
export default Users;
