import { Interaction } from "./Interaction"
import { MessageDate } from "./MessageDate"
import { User } from "./User"

export const DirectMessageList = () => {
    return (
        <div id='DMList'>
            <p>This will be a div that contains the users you have interacted with</p>
            <User />
            <Interaction />
            <MessageDate />
        </div>
    )
}