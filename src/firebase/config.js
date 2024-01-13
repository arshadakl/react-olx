// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgDwLY8WbPePWY28f0m8cyORwlVF_7mrA",
  authDomain: "react-olx-arshadakl.firebaseapp.com",
  projectId: "react-olx-arshadakl",
  storageBucket: "react-olx-arshadakl.appspot.com",
  messagingSenderId: "1057807005588",
  appId: "1:1057807005588:web:dc3d449ff5827653060181",
  measurementId: "G-CL118RVMNR"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)