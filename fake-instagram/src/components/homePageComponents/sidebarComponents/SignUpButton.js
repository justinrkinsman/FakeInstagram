import { Link } from "react-router-dom"
import { renderSignUpPage } from "./SignUpPage"

export function SignUpButton() {
    return(
        <Link to='/signup'><button id='signUp' >Sign Up</button></Link>
    )
}