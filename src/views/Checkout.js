import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartAppSlice.js";
import api from '../features/httpServer'

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [orderData, setOrder] = useState({
    order: cart.cartItems,
    price: cart.cartTotalAmount,
    address: "",
    phone: "",
    name: "",
    comment: "",
    pago: "",
    clientIp: "",
  });
  const [error, setError] = useState({
    address: "",
    phone: "",
  });

  const [pago, setPago] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...orderData,
      [name]: value,
    });
    
    setError(
      validate({
        ...orderData,
        [name]: value,
      })
    );
  };
  const validate = (data) => {
    const error = {};
    const regexPhone = /^[0-9]*^[()-]*$/;
    if (regexPhone.test(data.phone)) {
      error.phone = "numero invalido";
    }
    if (!data.address) {
      error.address = "direcion invalido";
    }
    if (pago === "efectivo" && !data.pago) {
      error.pago = "ingrese un monto";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = Object.keys(error);
    const options = {
      headers: { "content-type": "application/json" },
    };

    if (validate.length)
      return window.alert("Complete los campos obligatorios");

    api.post("/checkout", orderData, options).then((res) => {
      if (!res.err) {
        setOrder({
          order: "",
          price: "",
          address: "",
          phone: "",
          name: "",
          comment: "",
          clientIp: "",
        });
        dispatch(clearCart());
        console.log(res.data);
        window.location.href = res.data.url;
        
      }
    }).catch(err => console.log(err) );
  };
  const handleInputPago = (e) => {
    setPago(e.target.value);
  };

  return (
    <>
      <div>
        <h2 className='subtitle'>Checkout</h2>
        <ul className={style.lista}>
          {cart.cartItems.map((product) => (
            <li  className='subtitle' key={product.id}>
              {product.cartQuantity}-{product.title}: $
              {product.cartQuantity * product.price}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className={style.inputs}
            style={error.phone ? { border: "2px solid red" } : null}
            placeholder="Teléfono (obligatorio)*"
            name="phone"
            value={orderData.phone}
            onChange={handleInputChange}
          />
          <input
            className={style.inputs}
            placeholder="Nombre"
            name="name"
            value={orderData.name}
            onChange={handleInputChange}
          />
          <input
            className={style.inputs}
            style={error.address ? { border: "2px solid red" } : null}
            placeholder="Direccion (obligatorio)*"
            name="address"
            value={orderData.address}
            onChange={handleInputChange}
          />
          <select className={style.inputs} onChange={handleInputPago}>
            <option>Medio de pago</option>
            <option value="efectivo">efectivo</option>
          </select>
          {pago === "efectivo" ? (
            <input
              className={style.inputs}
              placeholder="Con cuanto abonaras?"
              style={error.pago ? { border: "2px solid red" } : null}
              name="pago"
              value={orderData.pago}
              onChange={handleInputChange}
            />
          ) : null}
          <textarea
            className={style.textArea}
            placeholder="Mensaje Opcional"
            name="comment"
            value={orderData.comment}
            onChange={handleInputChange}
          />
          {cart.cartTotalAmount ? (
            <Footer to={() => console.log("flama")} text="Pagar" />
          ) : (
            <Footer to={() => navigate("/")} text={"Agregar Productos"} />
          )}
        </form>
      </div>
    </>
  );
};

export default Checkout;
