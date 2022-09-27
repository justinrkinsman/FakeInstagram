import IGLogo from '../../images/logo.jpg'
import './Logo.css'

export function Logo() {
    return(
        <div>
            <img src={IGLogo} alt='IG logo' id='FakeInstagramLogo'></img>
        </div>
    )
}