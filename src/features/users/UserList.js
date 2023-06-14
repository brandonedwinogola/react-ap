import React from 'react';
import { useGetUsersQuery, useDeleteUserMutation } from './usersSlice';

const UserList = () => {
  const { data: users = [], isFetching } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id) => {
    await deleteUser(id);
  };

  return (
    <div>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
