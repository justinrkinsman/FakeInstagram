import Plus from '../../../images/plus.jpg'
import './HeaderButtons.css'
import { Link } from 'react-router-dom'

export function NewPost() {
    return(
        <Link to='/new-post'><img src={Plus} alt='New Post'></img></Link>
    )
}