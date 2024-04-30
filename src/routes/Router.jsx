import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import NotFound from "../pages/NotFound";


function Router(){

    return(
        <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/contacto" element={<Contacto/> }/>         
        <Route path="*" element={<NotFound/>} />       

      </Routes>  

    );
}

export default Router;