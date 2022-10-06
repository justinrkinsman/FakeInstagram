import { DirectMessageList } from "../messageComponents/DirectMessageList";
import { YourProfilePic } from "./YourProfilePic";
import { MessagesPanel } from "../messageComponents/MessagesPanel";
import { YourUsername } from "./YourUsername";

export const DMPage = () => {
    return(
        <div id='DMPage'>
            <YourProfilePic />
            <YourUsername />
            <DirectMessageList />
            <MessagesPanel />
        </div>
    )
}