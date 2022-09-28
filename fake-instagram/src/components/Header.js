import { Logo } from './headerComponents/Logo'
import { Searchbar } from './reusuableComponents/Searchbar'

export function Header() {
    return (
        <div id="header">
            <Logo />
            <Searchbar />
        </div>
    )
}