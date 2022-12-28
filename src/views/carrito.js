import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import style from "./index.module.css";
import { useSelector } from "react-redux";
import Products2 from "../components/product2/products2";

export default function Carrito() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className={style.cartContainer}>
        <div className={style.divCartTile}>
          <h2 className={style.cartTitle}>
            {cart.cartItems.length === 0 ? "Carrito vacío" : "Carrito"}
          </h2>
        </div>
        {cart.cartItems.map((producto) => (
          <Products2 product={producto} key={producto.id} />
        ))}
        {cart.cartTotalAmount ? (
          <Footer to={() => navigate("/checkout")} text={"Pagar"} />
        ) : (
          <Footer to={() => navigate("/")} text={"Agregar Productos"} />
        )}
      </div>
    </>
  );
}
