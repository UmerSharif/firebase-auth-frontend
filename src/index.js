import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from "firebase/compat/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyCV5-o6R0FPFyppVxnJI57zFVSZ19pl7ck",
//   authDomain: "fir-auth-test-4ba21.firebaseapp.com",
//   projectId: "fir-auth-test-4ba21",
//   storageBucket: "fir-auth-test-4ba21.appspot.com",
//   messagingSenderId: "1026669200585",
//   appId: "1:1026669200585:web:6a199113dc8cba32133918",
//   measurementId: "G-HKYZ69XGN8",
// };
// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
