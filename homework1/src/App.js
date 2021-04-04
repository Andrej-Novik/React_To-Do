import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import UsersPage from './components/UsersPage';

function App() {
   return (
      <BrowserRouter>
			<div className="app">
				<div className="content">
					<Route path="" render={() => <UsersPage />} />
				</div>
         </div>
      </BrowserRouter>
   );
}

export default App;
