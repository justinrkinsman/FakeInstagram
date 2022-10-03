import { Header } from "./Header";
import { MainPageContent } from "./homePageComponents/MainPageContent";
import { SignUpPage } from "./homePageComponents/sidebarComponents/SignUpPage";

export function HomePage(){
    return(
        <div>
            <Header />
            <MainPageContent />
            <SignUpPage />
        </div>
    )
}