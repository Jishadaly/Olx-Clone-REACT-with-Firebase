
import { initializeApp } from 'firebase/app';
import{getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDGS-W-tF544TriW_3V4arIy968pe8BCKQ",
  authDomain: "olx-clone-d2cd8.firebaseapp.com",
  projectId: "olx-clone-d2cd8",
  storageBucket: "olx-clone-d2cd8.appspot.com",
  messagingSenderId: "669699237837",
  appId: "1:669699237837:web:5afa459f343a7c05060684",
  measurementId: "G-WL5T52NQYP"
};


export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase);
export const db = getFirestore(Firebase)
export const storage = getStorage(Firebase)
// export default Firebase;
