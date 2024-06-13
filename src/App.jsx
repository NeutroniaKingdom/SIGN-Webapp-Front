import NavBar from "./components/layout/NavBar.jsx";
import {BrowserRouter} from "react-router-dom";
import Routing from "./routing/Routing.jsx";
import Footer from "./components/layout/Footer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <main className="dark:text-woodsmoke-50 text-woodsmoke-0 dark:bg-woodsmoke-0 bg-woodsmoke-50">
                <Routing/>
            </main>
            <Footer/>
            
        </BrowserRouter>
    )
}

export default App;