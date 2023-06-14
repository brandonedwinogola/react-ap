import React from 'react';
import UserList from './features/users/UserList';
import UserForm from './features/users/UserForm';

const App = () => {
  return (
    <div>
      <h1>React CRUD App</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;

