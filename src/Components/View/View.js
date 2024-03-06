import React, { useEffect, useState, useContext } from 'react';
import './View.css';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { PostDetailsContext } from '../../store/postContext';
import { useParams } from 'react-router-dom';
// import { FirebaseContext } from '../../store/firebaseContext';
function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostDetailsContext);
  const {id} = useParams()

  useEffect(() => {
    const getUserData = async () => {
      try {

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          if(doc.data().id === postDetails.user) {
            const data = doc.data()
            setUserDetails(data)
          }
        });
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
    };

    getUserData();
  }, []);


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt.toDate().toLocaleDateString()}</span>
        </div>

        {
          userDetails && <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.name}</p>
            <p>1234567890</p>
          </div>
        }
      </div>
    </div>
  );
}

export default View;
