import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mega from "../pages/Mega";
import Quin from "../pages/Quin";
import Navbar from "../components/Navbar";
import Time from "../pages/Time";

function Rotas() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/megasena' element={<Mega />} />
                <Route path='/timemania' element={<Time />} />
                <Route path='/quina' element={<Quin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;