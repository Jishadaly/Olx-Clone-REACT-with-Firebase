import React, { Fragment, useContext, useEffect, useState  } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/firebaseContext';
import {  db  , storage} from '../../firebase/config';
import { getStorage, ref, uploadBytes ,getDownloadURL } from 'firebase/storage';
import { Firestore, Timestamp, addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  
  const navigate = useNavigate()
  const { firebase ,storage } = useContext(FirebaseContext)
 useEffect(()=>{
  console.log(storage);
 })
  const {user} = useContext(AuthContext)
  const [name , setName] = useState('')
  console.log(name);
  const [ category , setCategory ] = useState('')
  const [price , setPrice ] = useState("")
  const [image , setImage] = useState(null)
  

  const handleClick =() =>{
    //   storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
    //   ref.getDownloadURL().then((url)=>{
    //     console.log(url);
    //   })
    //  })
    
    const currentDate = Timestamp.now();
    const storageRef = ref(storage,`/image/${image.name}`)
    uploadBytes(storageRef , image).then((snapshot)=> getDownloadURL(snapshot.ref)).then((url)=>
    addDoc(collection(db , 'products'),{
      name ,
      category ,
       price ,
        url ,
         user : user.uid ,
         createdAt : currentDate
         
    })).then((docRef)=>{
      alert("doc added")
      navigate('/')
      console.log('Document added with ID: ', docRef.id);
      navi
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              onChange={(e)=> setName(e.target.value)}
              value={name}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              onChange={(e)=> setCategory(e.target.value)}
              value={category}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" onChange={(e)=> setPrice(e.target.value)} value={price}/>
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          
            <br />
            <input onChange={(e)=> setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleClick} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
