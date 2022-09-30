import { signIn } from '../../App'

export function LoginButton(props) {
    return(
        <button id='login' onClick={signIn}>Login</button>
    )
}