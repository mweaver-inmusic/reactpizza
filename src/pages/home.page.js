import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../logo.svg';
const Home = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/account/users').then(res => res.json()).then(data => setUsers(data));
  }, [])

  return (
    <>
    {users.map(user => <p>{user.email}</p>)}
    </>
  );
}

export default Home;