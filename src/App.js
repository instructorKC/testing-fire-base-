
import './App.css';
import React, {useState, useEffect, useCallback} from 'react';
import {db} from './firebase-config'
import { collection, getDocs, addDoc,updateDoc, deleteDoc, doc} from '@firebase/firestore'
import Login from './components/Login';
function App() {

  const [students, setStudents] = useState([]);
 
  const studentsCollectionRef = collection(db, 'more');
  const getStudents = useCallback(async () => {
    const data = await getDocs(studentsCollectionRef);
    setStudents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  
  }, [studentsCollectionRef]);

  useEffect(()=> {

    getStudents();
  }, [getStudents])

 const updateuser = async (id, age) => {
   const studentDoc = doc(db, 'more', id)
  const newFields = {age: age+1};
  await updateDoc(studentDoc ,newFields);
  getStudents();
 }
 const deleteStudent = async (id) => {
  const studentDoc = doc(db, 'more', id)
  await deleteDoc(studentDoc );
  getStudents();
}

  return (

    <div className="App" style={{marginBottom: "600px"}}>
         <Login />
      <Input studentsCollectionRef={studentsCollectionRef}   getStudents={getStudents}/>

      {students.map((student)=> {
        return <div key={student.id}> 
        <p>name: {student.name} </p>  <p> Age: {student.age}</p> 
        <button onClick={() => updateuser(student.id, student.age)}>Increase Age</button>
        <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
        </div>;
      })}
   
    </div>

  
  );
}

export default App;





const Input = (props) => {
  const [newName, setstudentsName] = useState("");
  const [newAge, setAge] = useState("");
  const { studentsCollectionRef, getStudents} = props;

  const createstudent = async () => {
    await addDoc(studentsCollectionRef, { name: newName, age: newAge})
    getStudents();
    // setstudentsName("");
    // setAge("");
  }
  return (
    <React.Fragment>
      <input onChange={(event) => setstudentsName(event.target.value)} placeholder="Name" type="text" />
      <input onChange={(event) => setAge(parseInt(event.target.value))} type="text" placeholder="Age" />
      <button onClick={createstudent}>Create student</button>
    </React.Fragment>
   

  )
}







