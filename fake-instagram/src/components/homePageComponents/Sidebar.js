import './Sidebar.css'
import '../reusuableComponents/LoginButton'
import { LoginButton } from '../reusuableComponents/LoginButton'
import { SignUpButton } from './sidebarComponents/SignUpButton'

export function Sidebar() {
    return(
        <div id='sidebar'>
            <SignUpButton />
            <LoginButton />
        </div>
    )
}