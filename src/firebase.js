// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAOi-8wdp1_6KmIgE8Pi3KN_x-E7jW0FjM",
  authDomain: "login-7c36e.firebaseapp.com",
  projectId: "login-7c36e",
  storageBucket: "login-7c36e.appspot.com",
  messagingSenderId: "736850190708",
  appId: "1:736850190708:web:ed4479a6377c5b94e20c21",
  measurementId: "G-9LM332BN1K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = app.firestore();

const auth = firebase.auth();

export { auth };
