//import { Link } from "react-router-dom"
import { renderSignUpPage } from "./SignUpPage"

export function SignUpButton() {
    return(
        <button id='signUp' onClick={renderSignUpPage}>Sign Up</button>
    )
}
/*<Link to='/signup'>*//*</Link>*/