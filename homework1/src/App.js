import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import UserPageContainer from './components/UsersPage/UserPageContainer';

function App() {
   return (
      <BrowserRouter>
         <div className="app">
            <Route path="/users" render={() => <UserPageContainer />} />
         </div>
      </BrowserRouter>
   );
}

export default App;
