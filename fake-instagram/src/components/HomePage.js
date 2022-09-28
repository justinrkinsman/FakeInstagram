import { Header } from "./Header";
import { MainPageContent } from "./homePageComponents/MainPageContent";

export function HomePage(){
    return(
        <div>
            <Header />
            <MainPageContent />
        </div>
    )
}