import { MessageText } from "./MessageText"
import { NewMessageEntryBox } from "./NewMessageEntryBox"
import { SendButton } from "./SendButton"

export const MessagesPanel = () => {
    return (
        <div id='messagesPanel'>
            <div>This will be a div on the right side of the screen that contains the messages
                 with the selected user
            </div>
            <MessageText />
            <NewMessageEntryBox />
            <SendButton />
        </div>
    )
}