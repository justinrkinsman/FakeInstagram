import User from '../../images/user.jpg'
import '../headerComponents/headerButtons/HeaderButtons.css'
import "./YourProfilePic.css"

export function YourProfilePic() {
    return(
        <img src={User} alt='Profile Pic' id='headerProfilePic'></img>
    )
}