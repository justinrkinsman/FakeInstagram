import Message from '../../../images/message.jpg'
import './HeaderButtons.css'
import { Link } from 'react-router-dom'
import { /*initFirebaseAuth,*/ renderYourUsername } from '../../reusuableComponents/Username'
import React from 'react'
import { checkSignedInWithMessage } from '../../../App'

export function DirectMessages() {
    return (
        <Link to='/messages'><img src={Message} alt='DM' onClick={renderYourUsername}></img></Link>
    )
}