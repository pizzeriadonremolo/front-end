import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import style from "./index.module.css";
import { useSelector } from "react-redux";
import Products2 from "../components/product2/products2";
import api from "../features/httpServer";
import swal from "sweetalert";

export default function Carrito() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const changeOrder = () => {
    api
      .put(`/checkout/order/cart/${cart.number}`, cart, {
        headers: { authorization: `bored ${cart.jwt}` },
      })
      .then((res) => {
        swal({
          title: "Orden editada exitosamente!",
          text: '',
          icon: "success",
        }).then(() => navigate(`/view/${cart.number}`));
      })
      .catch((err) =>
        swal({
          title: "Upps!",
          text: err.response.data.error,
          icon: "error",
        }).then((res) => {
          navigate(`/view/${cart.number}`);
        })
      );
  };
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
          cart.change ? (
            <Footer to={changeOrder} text={"Editar pedido"} />
          ) : (
            <Footer to={() => navigate("/checkout")} text={"Pagar"} />
          )
        ) : (
          <Footer to={() => navigate("/")} text={"Agregar Productos"} />
        )}
      </div>
    </>
  );
}
