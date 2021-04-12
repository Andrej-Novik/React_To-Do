import { BrowserRouter, Route } from "react-router-dom";
import styles from "./App.module.scss";
import UsersPage from "./components/pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Route path="" render={() => <UsersPage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
