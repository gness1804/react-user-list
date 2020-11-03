import { useState } from 'react';
import axios from 'axios';
import User from '../User/';
import './Users.css';

function Users () {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(data);
    } catch (error) {
      throw new Error('Failed to fetch users!');
    }
  }

  return (
    <div className="users">
      {!users.length && <p className="users-none-message">No users yet. Please click the button to see them.</p>}

      <div className="users-list-container">
        {!!users.length && users.map(user => <User name={user.name} email={user.email} />)}
      </div>

      <button className="users-show-button" onClick={getUsers}>See Users</button>
    </div>
  )
}

export default Users;
