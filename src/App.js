import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUp from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Create from './Components/Create/Create'
import { AuthContext, FirebaseContext } from './store/firebaseContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import View from './Components/View/View';
import PostContext, { PostDetailsContext } from './store/postContext';


function App() {
  const {currentUser,setUser} = useContext(AuthContext)
  const { firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
      // console.log("auth///",auth);
      // console.log("current user//",currentUser);
      setUser(currentUser)
    })

  }) 
  return (
    <div>
  <PostContext>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/create' element={<Create />} />
      <Route path='/productDetails/:id' element={<View />} />
    </Routes>
  </PostContext>
</div>

  );
}

export default App;
