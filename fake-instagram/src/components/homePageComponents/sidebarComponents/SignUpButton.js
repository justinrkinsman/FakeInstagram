import { Link } from "react-router-dom"

export function SignUpButton() {
    return(
        <Link to='/signup'><button id='signUp'>Sign Up</button></Link>
    )
}