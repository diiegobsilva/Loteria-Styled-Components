import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timemania from "../pages/Timemania";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import Menu from "../components/Menu/index";

function Rotas() {
    return (
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path='/timemania' element={<Timemania />} />
                <Route path='/megasena' element={<Megasena />} />
                <Route path='/quina' element={<Quina />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;