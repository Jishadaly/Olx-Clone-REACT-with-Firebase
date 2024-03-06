import React, { useState ,useContext } from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth  } from '../../firebase/config';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const { Firebase } = useContext(FirebaseContext)
  const navigate = useNavigate('')

  const handlLogin = (e) =>{
    e.preventDefault()
     const authenticate = signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       
       const user = userCredential.user;
       navigate('/')
       
     }) .catch((error) => {
      alert("failed");
    });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=> setEmail(e.target.value)}  
            value={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
