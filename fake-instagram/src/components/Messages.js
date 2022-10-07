import { Header } from "./Header"
import { DMPage } from "./reusuableComponents/MessagePage"
import React from 'react'
import { checkSignedInWithMessage } from "../App"

/*export function MessagesPage() {
    return(
        <div id='messagesPage'>
            <Header />
            <DMPage />
        </div>
    )
}*/

export class MessagesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {color: 'white'}
    }
    componentDidMount() {
        if (checkSignedInWithMessage() === true){
            this.setState({ color: 'green'})
        }
        else {
            this.setState({ color: 'red'})
        }
    }
    render() {
        return(
        <div id='messagesPage' style={{color: this.state.color}}>
            <Header />
            <DMPage />
        </div>
        )
    }
}