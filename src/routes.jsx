import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import InformacoesAdicionais from "./componentes/InformacoesCompra";
import "./index.css";
import Atendimento from "./pages/Atendimento";
import Avaliacoes from "./pages/Avaliacoes";
import CadastrarProduto from "./pages/CadastrarProduto";
import Carrinho from "./pages/Carrinho";
import Cashback from "./pages/Cashback";
import Categoria from "./pages/Categoria";
import Home from "./pages/Home";
import Pagina404 from "./pages/Pagina404";
import PaginaProduto from "./pages/PaginaProduto";
import QuemSomos from "./pages/QuemSomos";
import ResultadosDePesquisa from "./pages/ResultadosDePesquisa";
import TrocasEDevolucoes from "./pages/TrocasEDevolucoes";
import store from "./store";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/trocas-e-devolucoes" element={<TrocasEDevolucoes />} />
          <Route path="/avaliacoes" element={<Avaliacoes />} />
          <Route path="/cashback" element={<Cashback />} />
          <Route path="/busca" element={<ResultadosDePesquisa />} />
          <Route path="/produto/:id" element={<PaginaProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </Provider>
      <InformacoesAdicionais />
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
