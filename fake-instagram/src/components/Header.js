import React from 'react'
import { Logo } from './headerComponents/Logo'
import { Searchbar } from './reusuableComponents/Searchbar'
import "./Header.css"
import { HeaderButtons } from './headerComponents/HeaderButtons'
import { YourProfilePic } from './reusuableComponents/YourProfilePic'

export function Header() {
    return (
        <div id="header">
            <Logo />
            <Searchbar />
            <HeaderButtons />
            <YourProfilePic />
        </div>
    )
}