import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  resetTotalAmount,
} from "../../features/cartAppSlice";
import style from "./index.module.css";

export default function Input({ product }) {
  switch (product.category) {
    case "Pizzas":
      var max = 4;
      break;
    case "Postres":
      var max = 14;
      break;
    case "Bebidas":
      var max = 8;
      break;
    case "Empanadas":
      var max = 24;
      break;
  }
  const [cant, setCant] = useState();
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const i = cart.findIndex((item) => item.id === product.id);
    if (i >= 0) {
      setCant(cart[i].cartQuantity);
    }
  }, [cart, cant]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    if (value <= max && value > -1) {
      const cantOfCategory = cart
      .map((e) => (e.category === product.category ? e.cartQuantity : null))
      .reduce((acc, curr) => acc + parseInt(curr), 0);

      if (cantOfCategory >= max + 1 && cant<value) return;
      setCant(value);
      dispatch(addToCart({ ...product, cartQuantity: value }));
      dispatch(resetTotalAmount());
    }
  };
  return (
    <>
      {!!parseInt(cant) ? (
        <button
          className={style.delete}
          onClick={() => {
            dispatch(removeFromCart(product));
            dispatch(resetTotalAmount());
            setCant(0);
          }}
        />
      ) : null}
      <input
        className={style.input}
        type="number"
        min={0}
        max={max}
        value={cant}
        onChange={handleChange}
      />
    </>
  );
}
