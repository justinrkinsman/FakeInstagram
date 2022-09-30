import './App.css';
//import { HomePage } from './components/HomePage';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  getAuth, 
} from 'firebase/auth';

import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyCRzMy0qDjTGhSeOil4dvEwlLzpTAa7raQ",
  authDomain: "fakeinstagram-81277.firebaseapp.com",
  projectId: "fakeinstagram-81277",
  storageBucket: "fakeinstagram-81277.appspot.com",
  messagingSenderId: "792059962777",
  appId: "1:792059962777:web:665152bc72f61d059f5f08"
};
    
firebase.initializeApp(firebaseConfig);

export async function signIn() {
  let provider = new GoogleAuthProvider()
  await signInWithPopup(getAuth(), provider)
  console.log(getAuth())
}

/*export function App() {
  return (
    <>
      <HomePage />
    </>
  );
}*/