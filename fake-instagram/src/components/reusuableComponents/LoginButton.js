import { signIn, checkSignedInWithMessage, setOnlinePersistence, initFirebaseAuth } from "../../App"
import { doc, getDoc } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { db } from "../../App"

export function LoginButton() {
    return(
        <button id='login' onClick={LoginButtonClick}>Login</button>
    )
}

async function LoginButtonClick() {
    await signIn()
    checkSignedInWithMessage()
    initFirebaseAuth()
    getUsername()
    setOnlinePersistence()
}

/*function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver)
}

function authStateObserver() {
  let profileCard = document.getElementById('profileCard')
  let signUpButton = document.getElementById('signUp')
  let loginButton = document.getElementById('login')
    if (checkSignedInWithMessage() === true){
        profileCard.style.visibility = 'visible'
        signUpButton.style.display = 'none'
        loginButton.style.display = 'none'
    }else{
        profileCard.style.visibility = 'hidden'
        signUpButton.style.display = 'inline'
        loginButton.style.display = 'inline'
    }
}*/

export async function getUsername() {
    const docRef = doc(db, 'user', getAuth().currentUser.email)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
        console.log('Document data:', docSnap.data())
    }else{
        console.log('No such document!')
    }
}
    /*let docRef = db.collection('user').doc('username')

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log('Document data: ', doc.data())
        } else {
            console.log('No such document!')
        }
    }).catch((error) => {
        console.log('Error getting document:', error)
    })*/
