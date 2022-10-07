import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../App"
import { initFirebaseAuth, checkSignedInWithMessage } from "../../App"

export async function renderYourUsername() {
    let yourUsername = document.getElementById('yourUsername')
    yourUsername.textContent = await getUsername()
    initFirebaseAuth()
}

export async function getUsername() {
    const docRef = doc(db, 'user', getAuth().currentUser.email)
    const docSnap = await getDoc(docRef)
  
    return await docSnap.data().username
}

/*export const initFirebaseAuth = () => {
    onAuthStateChanged(getAuth(), authStateObserver)
}

function authStateObserver() {
    if (checkSignedInWithMessage() === true){
        renderYourUsername()
    }
}*/