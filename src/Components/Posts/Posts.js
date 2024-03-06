import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { PostDetailsContext } from '../../store/postContext';
import { useNavigate } from 'react-router-dom';


function Posts() {
 const {firebase} = useContext(FirebaseContext)
 const [products , setProducts ] = useState([])
 const { setPostDetails } = useContext(PostDetailsContext)
 const navigate = useNavigate() 
 
 useEffect(()=>{
    const getData = async ()=> {
      try {
        const snapshot = await getDocs(collection ( db,"products"))
        const products = snapshot.docs.map(product =>({
           id:product.id,
           ...product.data()
        }));

       
        setProducts(products)
        
      } catch (error) {
        console.log("fetching error",error);
      }
    }
    getData();
 },[])

 const handleClick =(product) => {
  setPostDetails(product)
  console.log("|||||||||||",product)
  navigate('/productDetails/'+product.id)
 }
 
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        {
  products.map(product => (
    <div
      className="card"
      onClick={() => handleClick(product)}
      key={product.id}
    >
      <div className="favorite">
        <Heart></Heart>
      </div>
      <div className="image">
        <img src={product.url} alt="" />
      </div>
      <div className="content">
        <p className="rate">&#x20B9; {product.price}</p>
        <span className="kilometer">{product.category}</span>
        <p className="name">{product.name}</p>
      </div>
      <div className="date">
        <span>{product.createdAt.toDate().toLocaleDateString()}</span>
      </div>
    </div>
  ))
}

           
        </div>
     
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
