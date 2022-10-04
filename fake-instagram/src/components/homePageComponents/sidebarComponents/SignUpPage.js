import { Header } from "../../Header"
import { LoginButton } from "../../reusuableComponents/LoginButton"
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { signIn, checkSignedInWithMessage, initFirebaseAuth } from "../../../App";
import { Link } from "react-router-dom";

export function SignUpPage() {
    return(
        <div id='signUpPage'>
            <Header />
            <div id='signUpPanel'>
                <h2>Sign Up</h2>
                <div id="username">
                    <label htmlFor='usernameInput'>@</label>
                    <input type='text' placeholder={'Username (1-30 characters)'} name='usernameInput' id='usernameInput'></input>
                </div>
                <Link to='/'><button id='signUpWithGoogleButton' onClick={() => signUpButtonClick(document.getElementById('usernameInput').value)}>Sign-up with Google</button></Link>
                <p>Already signed up?</p>
                <LoginButton />
            </div>
        </div>
    )
}

async function signUpButtonClick(username) {
    await signIn()
    saveUsernameToDatabase(username)
    checkSignedInWithMessage()
    initFirebaseAuth()
}

async function saveUsernameToDatabase(username) {
    try {
        await addDoc(collection(getFirestore(), 'user'), {
            fullname: getAuth().currentUser.displayName,
            username: username,
            timestamp: new Date()
        })
    }
    catch(error) {
        console.error('Error writing username to Firebase Database', error)
    }
}