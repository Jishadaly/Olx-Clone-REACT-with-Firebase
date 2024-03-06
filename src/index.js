// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { FirebaseContext } from './store/firebaseContext';
// import  Firebase  from './firebase/config';

// ReactDOM.render(

// <FirebaseContext.Provider value={{Firebase}}>
// <BrowserRouter>
// <App /> 
// </BrowserRouter>
// </FirebaseContext.Provider>

// , document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import   Context, {  FirebaseContext } from './store/firebaseContext';

import {Firebase,auth , storage} from './firebase/config'; // Notice the change here

ReactDOM.render(
  
  <FirebaseContext.Provider value={ { Firebase , auth,storage }}> 
    {/* <AuthContext.Provider value={"hello"}> */}
    <Context>

    <BrowserRouter>
       <App />  
    </BrowserRouter>
    </Context>
      {/* </AuthContext.Provider> */}
      </FirebaseContext.Provider>
     ,
  document.getElementById('root')
);