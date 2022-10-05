import { YourProfilePic } from "../../reusuableComponents/YourProfilePic"
import { signOutUser } from "../../../App"
import { YourUsername } from "../../reusuableComponents/YourUsername"
import './ProfileCard.css'

export function ProfileCard() {
    return(
        <div id="profileCard">
            <div id='profileCardHeader'>
                <YourProfilePic />
                <YourUsername />
                <p>Full Name</p>
                <button onClick={signOutUser}>Logout</button>
            </div>
            <div id='profileCardStats'>
                <div id="profileCardFollowing">
                    <p>Following</p>
                    <p>0</p>
                </div>
                <div id="profileCardFollowers">
                    <p>Followers</p>
                    <p>0</p>
                </div>
                <div id="profileCardPosts">
                    <p>Posts</p>
                    <p>0</p>
                </div>
            </div>
        </div>
    )
}