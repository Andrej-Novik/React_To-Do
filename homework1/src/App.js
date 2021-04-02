import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import UsersPage from './components/UsersPage';

function App() {
   return (
      <BrowserRouter>
         <div className="app">
            <Route path="/users" render={() => <UsersPage />} />
         </div>
      </BrowserRouter>
   );
}

export default App;
