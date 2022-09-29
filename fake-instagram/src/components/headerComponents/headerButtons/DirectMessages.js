import Message from '../../../images/message.jpg'
import './HeaderButtons.css'
import { Link } from 'react-router-dom'

export function DirectMessages() {
    return (
        <Link to='/messages'><img src={Message} alt='DM'></img></Link>
    )
}