import { Header } from "./Header";
import { MainPageContent } from "./homePageComponents/MainPageContent";
//import { SignUpPage } from "./homePageComponents/sidebarComponents/SignUpPage";
import "./HomePage.css"
import { initFirebaseAuth } from "../App";

export function HomePage(){
    initFirebaseAuth()
    return(
        <div>
            <Header />
            <MainPageContent />
            
        </div>
    )
}

/*<SignUpPage />*/
