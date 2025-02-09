import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import InformacoesAdicionais from "./componentes/InformacoesCompra";
import "./index.css";
import Avaliacoes from "./pages/Avaliacoes";
import Cashback from "./pages/Cashback";
import Eletronicos from "./pages/Eletronicos";
import Home from "./pages/Home";
import Joias from "./pages/Joias";
import Pagina404 from "./pages/Pagina404";
import QuemSomos from "./pages/QuemSomos";
import RoupasFemininas from "./pages/RoupasFemininas";
import RoupasMasculinas from "./pages/RoupasMasculinas";
import TrocasEDevolucoes from "./pages/TrocasEDevolucoes";

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
        <Route path="/atendimento" element={<Eletronicos />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/trocas-e-devolucoes" element={<TrocasEDevolucoes />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <InformacoesAdicionais />
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
