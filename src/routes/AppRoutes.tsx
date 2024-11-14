import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Details from "../views/Details";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details/:cca3" element={<Details/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes;