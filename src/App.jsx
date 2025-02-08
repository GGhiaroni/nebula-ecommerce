import { BrowserRouter, Route, Routes } from "react-router";
import FeedHome from "./componentes/FeedHome";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<FeedHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
