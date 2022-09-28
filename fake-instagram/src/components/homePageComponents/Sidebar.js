import './Sidebar.css'
import './sidebarComponents/LoginButton'
import { LoginButton } from './sidebarComponents/LoginButton'

export function Sidebar() {
    return(
        <div id='sidebar'>
            <LoginButton />
        </div>
    )
}