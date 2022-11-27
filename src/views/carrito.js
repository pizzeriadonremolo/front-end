import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";
import Products3 from "../components/product3/products3";
import style from './index.module.css'
import { useSelector } from "react-redux";

export default function Carrito(){
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
return(
    <>
    <div>
      <h2 className={style.categorias}>Carrito</h2>
     {
       cart.cartItems.map(producto => <Products3 product={producto} key={producto.id}/>)
      }
      {
        cart.cartTotalAmount?(
          <Footer  to = {() =>  navigate("/checkout")} text={'Confirmar Pedido'} />
        ):(
          <Footer  to = {() =>  navigate("/")} text={'Agregar Productos'} />
        )
      }
     
    </div>
    </>
)

}