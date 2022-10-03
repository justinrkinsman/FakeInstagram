import './App.css';
//import { HomePage } from './components/HomePage';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  getAuth,
  onAuthStateChanged
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

export function initiFirebaseAuth() {
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

function authStateObserver() {
  if (checkSignedInWithMessage() === true) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    //let profilePicUrl = getProfilePicUrl();
    //let userName = getUserName();

    // Set the user's profile pic and name.
    //userPicElement.style.backgroundImage =
      //'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    //userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    //userNameElement.removeAttribute('hidden');
    //userPicElement.removeAttribute('hidden');
    //signOutButtonElement.removeAttribute('hidden');

    // Hide sign-in button.
    //signInButtonElement.setAttribute('hidden', 'true');

    // We save the Firebase Messaging Device token and enable notifications.
    //saveMessagingDeviceToken();
    console.log('logged in')
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    //userNameElement.setAttribute('hidden', 'true');
    //userPicElement.setAttribute('hidden', 'true');
    //signOutButtonElement.setAttribute('hidden', 'true');

    // Show sign-in button.
    //signInButtonElement.removeAttribute('hidden');
    console.log('signing off')
  }
}

function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || './images/user.jpg';
}

function getUserName() {
  return getAuth().currentUser.displayName;
}

/*export function App() {
  return (
    <>
      <HomePage />
    </>
  );
}*/