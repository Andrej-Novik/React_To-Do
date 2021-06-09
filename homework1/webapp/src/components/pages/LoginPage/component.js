import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const LoginPage = ({ error, auth }) => {
  let [newEmail, setNewEmail] = useState("");
  let [newPassword, setnNewPassword] = useState("");

  return (
     <div className={styles.login}>
      <div className={styles.authWindow}>
        <h2>Авторизация</h2>
				<div className={styles.form}>
					{error && <div className={styles.error}>{ error }</div>}
          <input
            type="text"
            placeholder="email"
            value={newEmail}
            onChange={(e) => {
              setNewEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="password"
            value={newPassword}
            onChange={(e) => {
              setnNewPassword(e.target.value);
            }}
          />
          <button onClick={() => auth(newEmail, newPassword)}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
