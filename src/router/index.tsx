import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastros from "../components/cadastros";
import Estoques from "../components/estoques";
import Vendas from "../components/vendas";
import { ItemProvider } from "../context/itemContext";
import Home from "../pages/home";

function AppRouter() {
  return (
    <ItemProvider>
      <BrowserRouter>
        <Home />
        <Routes>
            <Route path="/cadastros" element={<Cadastros />} />
            <Route path="/vendas" element={<Vendas />} />
            <Route path="/estoques" element={<Estoques />} />
        </Routes>
      </BrowserRouter>
    </ItemProvider>
  );
}

export default AppRouter;
