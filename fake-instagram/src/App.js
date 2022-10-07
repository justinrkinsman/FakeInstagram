import './App.css';
import { renderYourUsername } from './components/reusuableComponents/Username';
//import { HomePage } from './components/HomePage';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  getAuth,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import firebase from 'firebase/compat/app'
import { 
  getDoc, 
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCRzMy0qDjTGhSeOil4dvEwlLzpTAa7raQ",
  authDomain: "fakeinstagram-81277.firebaseapp.com",
  projectId: "fakeinstagram-81277",
  storageBucket: "fakeinstagram-81277.appspot.com",
  messagingSenderId: "792059962777",
  appId: "1:792059962777:web:665152bc72f61d059f5f08"
};
    
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app)
const auth = getAuth()
//const googleProvider = new GoogleAuthProvider()

export async function signIn() {
  let provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account'
  })
  await signInWithPopup(getAuth(), provider)
}

export function setOnlinePersistence(){
  const auth = getAuth()
  setPersistence(auth, browserLocalPersistence)
  .then(() => {
    return signIn
  })
  .catch((error) => {
    const errorCode = error.errorCode
    const errorMessage = error.message
  })
}

export function signOutUser() {
  signOut(getAuth())
}

export function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver)
}

function isUserSignedIn() {
  return !!getAuth().currentUser
}

export function checkSignedInWithMessage() {
  if (isUserSignedIn()) {
    return true;
  }
}

export const loginWithEMailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err)
    console.log(err.message)
  }
}

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

async function authStateObserver() {
  //let profileCard = document.getElementById('profileCard')
  //let signUpButton = document.getElementById('signUp')
  //let loginButton = document.getElementById('login')
  
  if (checkSignedInWithMessage() === true) {
    //show user's profile card
    //profileCard.style.visibility = 'visible'
    //signUpButton.style.display = 'none'
    //loginButton.style.display = 'none'
    
    // Set the user's profile pic and name.
    getProfilePicUrl()
    renderYourUsername()

    // We save the Firebase Messaging Device token and enable notifications.
    //saveMessagingDeviceToken();
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    //profileCard.style.visibility = 'hidden'
    //signUpButton.style.display = 'inline'
    //loginButton.style.display = 'inline'

    //disable header buttons
  }
}

function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || './images/user.jpg';
}

export function getFullname() {
  return getAuth().currentUser.displayName;
}

initFirebaseAuth()

/*export function App() {
  return (
    <>
      <HomePage />
    </>
  );
}*/

/*export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}*/