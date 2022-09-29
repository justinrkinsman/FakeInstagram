import { Header } from "../../Header"

export function SignUpPage() {
    return(
        <div id='signUpPage'>
            <Header />
            <div id='signUpPanel'>
                <h2>Sign Up</h2>
                <div id="username">
                    <label htmlFor='usernameInput'>@</label>
                    <input type='text' defaultValue={'Username (1-30 characters)'} name='usernameInput'></input>
                </div>
                <button>Sign-up with Google</button>
                <p>Already signed up?</p>
                <button>Login</button>
            </div>
        </div>
    )
}