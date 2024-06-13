import { Route, Routes } from "react-router-dom";
import UrlFront from "../shared/constants/UrlFront.js";
// Pages
import HomeView from "../views/HomeView.jsx";
import NaturalisationView from "../views/NaturalisationView.jsx";
import ConstitutionView from "../views/ConstitutionView.jsx";

const Routing = () => {
    return (
        <Routes>
            <Route path={UrlFront.HOME} element={<HomeView />} />
            <Route path={UrlFront.NATURALISATION} element={<NaturalisationView />} />
            <Route path={UrlFront.CONSTITUTION} element={<ConstitutionView />} />
        </Routes>
    )
}

export default Routing;