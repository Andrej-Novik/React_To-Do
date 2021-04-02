import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Users from './components/Users';

function App() {
   return (
      <BrowserRouter>
         <div className="app">
            <Route path="/users" render={() => <Users />} />
         </div>
      </BrowserRouter>
   );
}

export default App;
