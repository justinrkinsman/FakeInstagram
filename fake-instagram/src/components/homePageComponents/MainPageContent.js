import { Posts } from "./Posts";
import { Sidebar } from "./Sidebar";
import './MainPageContent.css'

export function MainPageContent() {
    return (
        <div id='homePageContent'>
            <Posts />
            <Sidebar />
        </div>
    )
}