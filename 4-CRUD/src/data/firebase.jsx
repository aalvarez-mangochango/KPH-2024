// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbI2QG4QSRsA2cK7wJhJZW6ndqdt5rKM",
  authDomain: "crud-firebase-687a9.firebaseapp.com",
  projectId: "crud-firebase-687a9",
  storageBucket: "crud-firebase-687a9.firebasestorage.app",
  messagingSenderId: "722531940214",
  appId: "1:722531940214:web:d60d90352d5e3904fbec57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};