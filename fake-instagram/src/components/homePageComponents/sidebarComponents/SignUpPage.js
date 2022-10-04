import { Header } from "../../Header"
import { LoginButton } from "../../reusuableComponents/LoginButton"
import { getAuth } from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { signIn, checkSignedInWithMessage, initFirebaseAuth, signOutUser } from "../../../App";
import { Link } from "react-router-dom";
import { db } from "../../../App"

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
    searchDatabaseForUsername(username)
    
}

async function searchDatabaseForUsername(username) {
    const docRef = doc(db, 'user', getAuth().currentUser.email)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
        console.log('email already taken')
        signOutUser()
    }else{
        saveUsernameToDatabase(username)
        checkSignedInWithMessage()
        initFirebaseAuth()
    }
}

async function saveUsernameToDatabase(username) {
    let email = getAuth().currentUser.email
    try {
        await setDoc(doc(getFirestore(), 'user', email), {
            fullname: getAuth().currentUser.displayName,
            username: username,
            timestamp: new Date(),
            email: email
        })
    }
    catch(error) {
        console.error('Error writing username to Firebase Database', error)
    }
}