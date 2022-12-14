import React, { useEffect, useState } from "react";
import { bebidasApi } from "../features/products.js";
import Products2 from "../components/product2/products2";
import Footer from "../components/footer/footer.js";
import Navbar from "../components/navBar/Navbar.js";
import Loader from "../components/loader/loader.js";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";

const Bebidas = () => {
  const navigate = useNavigate();
  const [bebidasState, setBebidas] = useState(null);
  useEffect(() => {
    bebidasApi(setBebidas);
  }, []);
  return (
    <>
      <Navbar category="Bebidas" />
      <h2 className={style.categorias}>Bebidas</h2>
      <div className={style.conteiner}>
        {bebidasState !== null ? (
          bebidasState.map((producto) => (
            <Products2 product={producto} key={producto.id} />
          ))
        ) : (
          <Loader />
        )}
        <Footer to={() => navigate("/carrito")} text={"Ver mi pedido"} />
      </div>
    </>
  );
};

export default Bebidas;
