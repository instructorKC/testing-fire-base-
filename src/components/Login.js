import React, { useState  } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'


function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const register = async () => {
    try { // TRY CATCH MUST USE WITH FIRE BASE ASYNC AWAIT FIRE BASE AUTHENTICATION
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      // INVALID EMAIL
      // EMAIL EXISTS
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      // INCORRECT PASSWORD
      // USER DOES NOT EXIST ECT...
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };


    const [user, setUser] = useState({});
  // Takes time a few seconds to get user credentials from firebase
  // Make it so user credentials are displayed on state change
  // use this onAuthChange to look for current user then put it in state
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
 // { user?.email }
// {auth.currentUser?.email ? auth.currentUser.email : 'none'}
  return (
    <div style={{ marginTop: "700px",marginBottom: "600px"}}>
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: {user?.email ? user?.email : 'none'}</h4>
    
      

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}
export default Login;
