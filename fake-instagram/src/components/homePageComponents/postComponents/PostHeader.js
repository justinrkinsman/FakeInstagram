import { FullName } from "../../reusuableComponents/FullName"

export function PostHeader() {
    return(
        <div id='postHeader'>
            <p>User's profile pic</p>
            <FullName />
            <p>@Username</p>
            <p>Button on end to follow/unfollow or delete post</p>
        </div>
    )
}