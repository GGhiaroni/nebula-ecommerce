import { BrowserRouter, Route, Routes } from "react-router";
import FeedHome from "./componentes/FeedHome";
import Header from "./componentes/Header";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<FeedHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
