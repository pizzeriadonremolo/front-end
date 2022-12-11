import React from "react";
import style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cartAppSlice";

const Footer = ({ to, text }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className={style.footerConteiner}>
      <button className={style.footerButton} type="submit" onClick={to}>
        {cart.cartTotalAmount ? <span>${cart.cartTotalAmount} </span> : null}
        {text}
      </button>
      <button
        className={style.deleteButton}
        onClick={() => dispatch(clearCart())}
      >
        .
      </button>
    </div>
  );
};

export default Footer;
