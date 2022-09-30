import { Header } from "./Header"
import { DMPage } from "./reusuableComponents/MessagePage"

export function MessagesPage() {
    return(
        <div id='messagesPage'>
            <Header />
            <DMPage />
        </div>
    )
}