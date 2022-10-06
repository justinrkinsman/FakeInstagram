import Message from '../../../images/message.jpg'
import './HeaderButtons.css'
import { Link } from 'react-router-dom'
import { renderYourUsername } from '../../reusuableComponents/Username'

export function DirectMessages() {
    return (
        <Link to='/messages'><img src={Message} alt='DM' onClick={renderYourUsername}></img></Link>
    )
}