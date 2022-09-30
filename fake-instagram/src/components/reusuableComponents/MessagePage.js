import { DirectMessageList } from "../messageComponents/DirectMessageList";
import { YourProfilePic } from "./YourProfilePic";
import { MessagesPanel } from "../messageComponents/MessagesPanel";

export const DMPage = () => {
    return(
        <div id='DMPage'>
            <YourProfilePic />
            <p>Create a function in App.js that will provide signed-in user's name</p>
            <DirectMessageList />
            <MessagesPanel />
        </div>
    )
}