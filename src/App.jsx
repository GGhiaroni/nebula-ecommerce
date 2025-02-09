import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import InformacoesAdicionais from "./componentes/InformacoesCompra";
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <InformacoesAdicionais />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
