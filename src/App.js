import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pizzas from "./views/Pizzas";
import Empanadas from "./views/Empanadas";
import Bebidas from "./views/Bebidas";
import Postres from "./views/Postres";
import Checkout from "./views/Checkout";
import Logo from "./components/header/header";
import Carrito from "./views/carrito";
import View from "./views/view";

function App() {

  return (
    <div >
      <Logo/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/empanadas" element={<Empanadas />}  />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
     
    </div>
  );
}

export default App;
