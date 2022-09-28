import React from 'react'
import { Logo } from './headerComponents/Logo'
import { Searchbar } from './reusuableComponents/Searchbar'
import "./Header.css"

export function Header() {
    return (
        <div id="header">
            <Logo />
            <Searchbar />
        </div>
    )
}