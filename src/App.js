import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {db} from './firebase-config'
import { collection, doc, getDocs} from '@firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, 'users');

  useEffect(()=> {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      //console.log(data.docs);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers();
  }, [])


  return (
    <div className="App">
      {users.map((user)=> {
        return <div key={user.id}> name: {user.name}</div>;
      })}
    </div>
  );
}

export default App;
