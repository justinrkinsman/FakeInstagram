import User from '../../images/user.jpg'
import '../headerComponents/headerButtons/HeaderButtons.css'

export function YourProfilePic() {
    return(
        <img src={User} alt='Profile Pic' id='headerProfilePic'></img>
    )
}