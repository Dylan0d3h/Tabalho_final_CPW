import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cardapio from "../pages/Cardapio";
import Favoritos from "../pages/Favoritos";
import Configuracoes from "../pages/Configuracoes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;