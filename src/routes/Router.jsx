import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pokemones from "../pages/Pokemones";
import NotFound from "../pages/NotFound";
import Personajes from "../pages/Personajes";

function Router() {

  return (
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/pokemones" element={<Pokemones />} />
      <Route path="/personajes/:name" element={<Personajes />} /> 
      <Route path="*" element={<NotFound />} />

    </Routes>

  );
}

export default Router;