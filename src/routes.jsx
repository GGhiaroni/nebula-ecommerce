import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import InformacoesAdicionais from "./componentes/InformacoesCompra";
import "./index.css";
import Eletronicos from "./pages/Eletronicos";
import Home from "./pages/Home";
import Joias from "./pages/Joias";
import Pagina404 from "./pages/Pagina404";
import RoupasFemininas from "./pages/RoupasFemininas";
import RoupasMasculinas from "./pages/RoupasMasculinas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/roupas-masculinas" element={<RoupasMasculinas />} />
        <Route path="/roupas-femininas" element={<RoupasFemininas />} />
        <Route path="/joias" element={<Joias />} />
        <Route path="/eletronicos" element={<Eletronicos />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <InformacoesAdicionais />
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
