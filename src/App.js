
import './App.css';
import React, {useState, useEffect} from 'react';
import {db} from './firebase-config'
import { collection, getDocs, addDoc} from '@firebase/firestore'
import Login from './components/Login';
function App() {

  const [students, setStudents] = useState([]);

  const studentsCollectionRef = collection(db, 'students');

  useEffect(()=> {
    const getStudents = async () => {
      const data = await getDocs(studentsCollectionRef);
      //console.log(data.docs);
      setStudents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getStudents();
  }, [])

  return (

    <div className="App">
      <Input studentsCollectionRef={studentsCollectionRef}/>

      {students.map((student)=> {
        return <div key={student.id}> name: {student.name}</div>;
      })}
      <Login />
    </div>

  
  );
}

export default App;





const Input = (props) => {
  const [newName, setstudentsName] = useState("");
  const [newAge, setAge] = useState("");
  const { studentsCollectionRef} = props;

  const createstudent = async () => {
    await addDoc(studentsCollectionRef, { name: newName, age: newAge})
    // setstudentsName("");
    // setAge("");
  }
  return (
    <React.Fragment>
      <input onChange={(event) => setstudentsName(event.target.value)} placeholder="Name" type="text" />
      <input onChange={(event) => setAge(event.target.value)} type="text" placeholder="Age" />
      <button onClick={createstudent}>Create student</button>
    </React.Fragment>
   

  )
}







