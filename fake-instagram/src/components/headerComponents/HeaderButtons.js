import React from 'react'
import { HomeButton } from './headerButtons/HomeButton'
import { DirectMessages } from './headerButtons/DirectMessages'
import { NewPost } from './headerButtons/NewPostButton'
import { Notifications } from './headerButtons/Notifications'

export function HeaderButtons() {
    return(
        <div id='headerButtons'>
            <HomeButton />
            <DirectMessages />
            <NewPost />
            <Notifications />
        </div>
    )
}