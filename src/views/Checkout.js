import React, { useState } from "react";
import style from "./index.module.css";
import { useSelector } from "react-redux";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartAppSlice.js";
import api from "../features/httpServer";
import swal from "sweetalert";

const Checkout = ({ oldOrder }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [orderData, setOrder] = useState(
    oldOrder || {
      order: cart.cartItems,
      price: cart.cartTotalAmount,
      address: "",
      phone: "",
      name: "",
      comment: "",
      pago: "",
      clientIp: "",
    }
  );

  const [error, setError] = useState({});

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
    if (data.phone.length < 10) {
      error.phone = "Debe ingresar un número válido de 10 dígitos";
    }
    if (regexPhone.test(data.phone)) {
      error.phone = "numero invalido";
    }
    if (!data.address) {
      error.address = "direcion invalido";
    }
    if (pago === "efectivo" && !data.pago) {
      error.pago = "ingrese un monto";
    }
    if (orderData && data.pago < orderData?.price) {
      error.pago = `Debe ingresar un monto mayor o igual a ${orderData?.price}`;
    }
    if (oldOrder && data.pago < oldOrder?.price) {
      error.pago = `Debe ingresar un monto mayor o igual a ${oldOrder?.price}`;
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = Object.keys(error);

    if (validate.length){
    const text = Object.values(error)[0];
      return swal({
        title: "Upps!",
        text,
        icon: "error",
      });
}
    if (!oldOrder) {
      api
        .post("/checkout", orderData)
        .then((res) => {
          setOrder({
            order: "",
            price: "",
            address: "",
            phone: "",
            name: "",
            comment: "",
            clientIp: "",
          });
          swal({
            title: "Orden pedida exitosamente!",
            text: "",
            icon: "success",
          }).then(() => {
            dispatch(clearCart());
            window.location.href = res.data.url;
          });
        })
        .catch((err) =>
          swal({
            title: "Upps!",
            text: err.response.data,
            icon: "error",
          })
        );
    } else {
      api
        .put(`/checkout/order/${orderData.number}`, orderData, {
          headers: { authorization: `bored ${orderData.jwt}` },
        })
        .then((res) => {
          setOrder({
            order: "",
            price: "",
            address: "",
            phone: "",
            name: "",
            comment: "",
            clientIp: "",
          });
        })
        .then((res) => {
          swal({
            title: "Orden editada exitosamente!",
            text: "",
            icon: "success",
          }).then(() => navigate(`/view/${orderData.number}`));
        })
        .catch((err) =>
          swal({
            title: "Upps!",
            text: err.response.data.error,
            icon: "error",
          }).then((res) => {
            navigate(`/view/${orderData.number}`);
          })
        );
    }
  };

  const handleInputPago = (e) => {
    setPago(e.target.value);
  };

  return (
    <>
      <div>
        <h2 className="subtitle">Checkout</h2>
        <ul className={style.lista}>
          {orderData.order && orderData.order.map((product) => (
            <li className="subtitle" key={product.id}>
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
            required
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
            type="text"
            className={style.inputs}
            style={error.address ? { border: "2px solid red" } : null}
            placeholder="Direccion (obligatorio)*"
            name="address"
            required
            value={orderData.address}
            onChange={handleInputChange}
          />
          <select className={style.inputs} onChange={handleInputPago}>
            <option>Medio de pago</option>
            <option value="efectivo">efectivo</option>
          </select>
          {pago === "efectivo" ? (
            <input
              type="number"
              title="Debe ingresar un monto mayor o igual al precio"
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
          {cart.cartTotalAmount || oldOrder ? (
            <Footer to={() => {}} text="Pagar" />
          ) : (
            <Footer to={() => navigate("/")} text={"Agregar Productos"} />
          )}
        </form>
      </div>
    </>
  );
};

export default Checkout;
