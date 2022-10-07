import Plus from '../../../images/plus.jpg'
import './HeaderButtons.css'
import { Link } from 'react-router-dom'
import { initFirebaseAuth } from '../../../App'

export function NewPost() {
    return(
        <Link to='/new-post'><img src={Plus} alt='New Post' onClick={initFirebaseAuth}></img></Link>
    )
}