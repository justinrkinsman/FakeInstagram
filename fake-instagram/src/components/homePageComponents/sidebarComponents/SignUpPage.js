import { Header } from "../../Header"
import { LoginButton } from "../../reusuableComponents/LoginButton"
import { signIn } from "../../../App"
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
                <button id='signUpWithGoogleButton' onClick={signUpButtonClick}>Sign-up with Google  </button>
                <p>Already signed up?</p>
                <LoginButton />
            </div>
        </div>
    )
}

async function signUpButtonClick() {
    await signIn()
    saveUsernameToDatabase()
    console.log(`Username: ${document.getElementById('usernameInput').value}`)
}

async function saveUsernameToDatabase() {
    try {
        await addDoc(collection(getFirestore(), 'user'), {
            fullname: getAuth().currentUser.displayName,
            username: document.getElementById('usernameInput').value
        })
    }
    catch(error) {
        console.error('Error writing username to Firebase Database', error)
    }
}