import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.scss";
import UsersPage from "./components/pages/UsersPage";
import LoginPage from "./components/pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken, initApp } from "./redux/actions/login";
import { useEffect } from "react";

function App() {

	useEffect(() => {
		dispatch(initApp())
	}, [])

  const token = useSelector((state) => state.loginPage.token);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(deleteToken());
  };

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles.logOut} onClick={logOut}>
            log out
          </div>
        </header>
        <Switch>
          
          {token ? (
            <Route path="" render={() => <UsersPage />} />
          ) : (
            <Route path="" render={() => <LoginPage />} />
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
