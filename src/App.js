import React from "react";
import NavScrollExample from "./componentes/nav.js";
import ContainerExample from "./componentes/banner.js";
import ProductosTodos from "./componentes/productos.js";
import Footer from "./componentes/foote.js";
import FloatingButton from './componentes/boton_flotante.js';


function App() {
  return (
    <React.StrictMode>
      <NavScrollExample />
      <ContainerExample />
      <ProductosTodos/>
      <FloatingButton/>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
