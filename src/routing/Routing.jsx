import { Route, Routes } from "react-router-dom";
import UrlFront from "../shared/constants/UrlFront.js";
// Pages
import HomeView from "../views/HomeView.jsx";



const Routing = () => {
    return (
        <Routes>
            <Route path={UrlFront.HOME} element={<HomeView />} />
        </Routes>
    )
}

export default Routing;