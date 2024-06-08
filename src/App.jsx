// import NavBar from "./components/layout/NavBar.jsx";
import {BrowserRouter} from "react-router-dom";
import Routing from "./routing/Routing.jsx";
// import Footer from "./components/layout/Footer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            {/* <NavBar/> */}
            <main className="pt-20 px-1">
                <Routing/>
            </main>
            {/* <Footer/> */}
            
        </BrowserRouter>
    )
}

export default App;