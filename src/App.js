import { useState } from 'react';
import './App.css';
import AddUser from "./components/Users/AddUser"
import Userlist from './components/Users/UserList'

function App() {

  const [usersList, setUsersList] = useState([])

  const getUserData = (formValues) => {

    setUsersList((prevState) => {
      return[ 
        ...prevState,
        formValues
      ]
    })
  }

  console.log(usersList);

  return (
    <div className="App">
      <AddUser onGetUserData={getUserData} />
      <Userlist userList={usersList}/>
    </div>
  );
}

export default App;
