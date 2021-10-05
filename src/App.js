import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login.page';
import Register from './pages/register.page';
import Home from './pages/home.page';
import PrimarySearchAppBar from './components/AppBar.component';
import BasicNavbar from './components/basic-nav-bar.component';

function App() {
  return (
    <div>
      {/* <PrimarySearchAppBar /> */}
      <BasicNavbar />

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
