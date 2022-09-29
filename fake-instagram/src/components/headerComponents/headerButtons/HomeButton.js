import Home from '../../../images/home.jpg'
import './HeaderButtons.css'
import { Link } from 'react-router-dom'

export function HomeButton() {
    return (
        <Link to='/'><img src={Home} alt='Home Page'></img></Link>
    )
}