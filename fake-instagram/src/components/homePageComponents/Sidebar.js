import './Sidebar.css'
import '../reusuableComponents/LoginButton'
import { LoginButton } from '../reusuableComponents/LoginButton'
import { SignUpButton } from './sidebarComponents/SignUpButton'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDWSX8mJCGRCGTya6fNJ5TOoutOHoXqZ9I",
  authDomain: "where-swaldo-eb0d8.firebaseapp.com",
  projectId: "where-swaldo-eb0d8",
  storageBucket: "where-swaldo-eb0d8.appspot.com",
  messagingSenderId: "737753416238",
  appId: "1:737753416238:web:bb5f22c4200bca34a8d5bf"
})

const auth = firebase.auth()

async function signIn() {
    let provider = new GoogleAuthProvider()
    await signInWithPopup(getAuth(), provider)
    console.log(getAuth())
}

export function Sidebar() {
    return(
        <div id='sidebar'>
            <SignUpButton />
            <LoginButton signInFunction={signIn}/>
        </div>
    )
}