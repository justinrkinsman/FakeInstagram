import './Sidebar.css'
import './sidebarComponents/LoginButton'
import { LoginButton } from './sidebarComponents/LoginButton'
import { SignUpButton } from './sidebarComponents/SignUpButton'

export function Sidebar() {
    return(
        <div id='sidebar'>
            <SignUpButton />
            <LoginButton />
        </div>
    )
}