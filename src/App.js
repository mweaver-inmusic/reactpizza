import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login.page';
import Register from './pages/register.page';
import Home from './pages/home.page';
import BasicNavbar from './components/basic-nav-bar.component';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  return (
    <div>
      <BasicNavbar user={user} setUser={setUser} />

      <Switch>
        <Route path="/register">
          <Register user={user} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
