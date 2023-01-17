import React from "react";
import "./App.css";
import { Route, Routes, Switch, BrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ProdDetailPage from "./pages/ProductDetail/ProdDetailPage";
import NavbarPage from "./pages/NavbarPage";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavbarPage />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          {/* <Route path="/about" element={<TestPage />} /> */}
          <Route path="/:id" element={<ProdDetailPage />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
