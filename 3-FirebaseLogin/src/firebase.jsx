// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UOj1FnXpTht_HgYSc7GM628IQSUL0ws",
  authDomain: "fir-login-91101.firebaseapp.com",
  projectId: "fir-login-91101",
  storageBucket: "fir-login-91101.firebasestorage.app",
  messagingSenderId: "777440363367",
  appId: "1:777440363367:web:f055520d38385cd0e765c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
