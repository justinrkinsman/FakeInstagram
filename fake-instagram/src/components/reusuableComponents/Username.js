import { getAuth } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../App"
import { initFirebaseAuth } from "../../App"

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