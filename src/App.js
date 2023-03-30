import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [userList, setUserList] = useState([])


  const addUserHandler = (uName, uAge) => {
    setUserList((previousList) => {
      return [...previousList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }
  return (
    // <React.Fragment> or <Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  );
}

export default App;
