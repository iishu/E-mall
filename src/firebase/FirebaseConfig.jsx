 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const FirebaseConfig = {
  apiKey: "AIzaSyCT4_J0DacChf1MShr4DT0tOVotx_jwkDk",
  authDomain: "myfirstapp-665be.firebaseapp.com",
  projectId: "myfirstapp-665be",
  storageBucket: "myfirstapp-665be.appspot.com",
  messagingSenderId: "545898474025",
  appId: "1:545898474025:web:5850d2d81d235cfea90a38"
};

 
const app = initializeApp(FirebaseConfig);

const fireDB= getFirestore(app);
const auth=getAuth(app);

export {fireDB, auth}