// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV5-o6R0FPFyppVxnJI57zFVSZ19pl7ck",
  authDomain: "fir-auth-test-4ba21.firebaseapp.com",
  projectId: "fir-auth-test-4ba21",
  storageBucket: "fir-auth-test-4ba21.appspot.com",
  messagingSenderId: "1026669200585",
  appId: "1:1026669200585:web:6a199113dc8cba32133918",
  measurementId: "G-HKYZ69XGN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);


