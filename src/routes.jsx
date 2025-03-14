import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
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
import Login from "./pages/Login";
import MeuPerfil from "./pages/MeuPerfil";
import Pagina404 from "./pages/Pagina404";
import PaginaProduto from "./pages/PaginaProduto";
import QuemSomos from "./pages/QuemSomos";
import ResultadosDePesquisa from "./pages/ResultadosDePesquisa";
import TrocasEDevolucoes from "./pages/TrocasEDevolucoes";
import store from "./store";
import { login } from "./store/reducers/usuario";

function AppRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuarioLogado) dispatch(login(usuarioLogado));
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
      <InformacoesAdicionais />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
