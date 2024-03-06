import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth ,db } from '../../firebase/config';
import { addDoc, collection } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';


export default function  Signup() { 

  const [userName , setUserName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [phone , setPhone] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const authDetails = await createUserWithEmailAndPassword(auth,email,password);
      await updateProfile(authDetails.user,{displayName:userName});
      const docRef = await addDoc(collection(db, "users"), {
        id:authDetails.user.uid,
        name: userName,
        phone: phone,

      }).then(()=>{
        navigate('/login')
      })
      
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname"  >Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
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
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
