import { useState } from 'react';

function Users () {
  const [users, setUsers] = useState([]);

  return (
    <div>
      {!users.length && <p>No users yet. Please click the button to see them.</p>}
    </div>
  )
}

export default Users;
