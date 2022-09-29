import IGLogo from '../../images/logo.jpg'
import './Logo.css'
import { Link } from 'react-router-dom'

export function Logo() {
    return(
        <div>
            <Link to='/'><img src={IGLogo} alt='IG logo' id='FakeInstagramLogo'></img></Link>
        </div>
    )
}