import React, { useEffect, useState } from "react";
import { pizzasApi } from "../features/products.js";
import Products2 from "../components/product2/products2";
import style from "./index.module.css";
import Footer from "../components/footer/footer.js";
import Navbar from "../components/navBar/Navbar.js";
import Loader from "../components/loader/loader.js";
import { useNavigate } from "react-router-dom";

const Pizzas = () => {
  const navigate = useNavigate();
  const [pizzasState, setPizzas] = useState(null);
  useEffect(() => {
    pizzasApi(setPizzas);
  }, []);
  return (
    <>
      <Navbar category="Pizzas" />
      <h2 className={style.categorias}>Pizzas</h2>
      <div className={style.conteiner}>
        {pizzasState !== null ? (
          pizzasState.map((producto) => (
            <Products2 product={producto} key={producto.id} />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <Footer to={() => navigate("/carrito")} text={"Ver mi pedido"} />
    </>
  );
};

export default Pizzas;
