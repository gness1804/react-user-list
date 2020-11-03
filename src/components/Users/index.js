import { useState } from 'react';
import axios from 'axios';

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
    <div>
      {!users.length && <p>No users yet. Please click the button to see them.</p>}

      <button onClick={getUsers}>See Users</button>
    </div>
  )
}

export default Users;
