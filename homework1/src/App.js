import { BrowserRouter, Route } from 'react-router-dom';
import styles from "./App.module.scss"
import UsersPageContainer from './components/pages/UsersPage/conteiner';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
		  	<Route path="" render={() => <UsersPageContainer />} />
			</div>
    </BrowserRouter>
  );
}

export default App;
