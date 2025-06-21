import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "../src/components/Cabecera";
import Banner from "../src/components/Banner";
import Filtros from "../src/components/Filtros";
import ListaProductos from "../src/components/ListaProductos";
import Hero from "../src/components/Hero";
import Footer from "../src/components/Footer";
import Categorias from "../src/components/Categorias";
import CategoriaId from "../src/components/CategoriaId";
import CuponDescuento from "../src/components/CuponDescuento";
import { CuponProvider } from "./context/CuponContext.jsx";

function App() {
  
  return (
  <CuponProvider>
    <BrowserRouter>
      <div sx={{ gap: 5 }}>
        <Cabecera /> 
        <Routes>
          <Route path="/" element= {
            <>
              <Banner />
              <Filtros /> 
              <ListaProductos />
              <CuponDescuento />
              <Hero />
            </>
          }
          />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categoria/:id" element={<CategoriaId />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </CuponProvider>
);


}

export default App;
