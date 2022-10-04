import { getAuth } from "firebase/auth"

export /*async*/ function FullName() {
    //let fullName = await getAuth().currentUser.displayName
    //document.getElementById('fullNameDisplay').textContent = fullName
    return(
        <div id='fullNameDisplay'></div>
    )
}