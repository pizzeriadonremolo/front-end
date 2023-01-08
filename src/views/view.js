import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../features/httpServer";
import "./view.css";
import Loader from "../components/loader/loader";
import { useDispatch } from "react-redux";
import { changeCart } from "../features/cartAppSlice";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setOrder] = useState(null);
  const handleEdit = ()=>{
    dispatch(changeCart(order));
    navigate('/carrito')
  }

  useEffect(() => {
    api.get(`/checkout/order/${id}`, {}).then((res) => {
      setOrder(res.data);
    });
  }, [id]);

  return (
    <div className="view-purchase-container">
      <h2 className="view-purchase-title">Su Orden ha sido procesada</h2>
      <hr className="view-line" />
      <div className="div-view-client-order">
        <div className="div-client-view-order-img-title">
          <img
            src="https://res.cloudinary.com/da8x3x8nz/image/upload/v1672101565/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Icons/calendary_rp8kd6.png"
            className="orden-nro"
            alt="orden-nro"
          />
          <div className="view-client">Orden N°</div>
        </div>
        <div className="div-view-client-order-number">
          <div className="view-client-order">{order?.number}</div>
        </div>
      </div>
      <hr className="view-line" />
      <div className="div-view-client-data">
        <img
          src="https://res.cloudinary.com/da8x3x8nz/image/upload/v1672101625/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Icons/user_uqbbg0.png"
          className="nombre"
          alt="Nombre"
          title="Cliente"
        />
        <div className="view-client">{order?.name}</div>
      </div>
      <hr className="view-line" />
      <div className="div-view-client-data">
        <img
          src="https://res.cloudinary.com/da8x3x8nz/image/upload/v1672101599/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Icons/phone_wtp84u.png"
          className="phone"
          alt="Phone"
          title="Teléfono"
        />
        <div className="view-client">{order?.phone}</div>
      </div>
      <hr className="view-line" />
      <div className="div-view-pay-results">
        <img
          src="https://res.cloudinary.com/da8x3x8nz/image/upload/v1672101580/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Icons/gps_yq6j42.png"
          className="address-img"
          alt="Address"
          title="Dirección"
        />
        <h2 className="view-pay-client">{order?.address}</h2>
      </div>
      <hr className="view-line" />
      <ul className="view-purchase-details">
        {order ? (
          order.order.map((order) => (
            <div key={order.id} className="div-view-purchase-list">
              <li className="view-purchase-list-title">{order.title}</li>
              <li className="view-purchase-list-title">
                x {order.cartQuantity} und.
              </li>
              <li className="view-purchase-list-price">$ {order.price}</li>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </ul>
      <hr className="view-line" />
      {order ? (
        <>
          <div className="div-view-pay-results">
            <div className="div-view-pay-total">
              <img
                src="https://res.cloudinary.com/da8x3x8nz/image/upload/v1672101569/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Icons/cash_jzpdol.png"
                alt="Total a pagar"
                className="total-a-pagar"
              />
              <h2 className="view-pay-results">Total a pagar:</h2>
            </div>
            <div className="">
              <h2 className="view-pay-client">$ {order.price}</h2>
            </div>
          </div>
          <div className="div-view-pay-results">
            <h2 className="view-pay-results">El cliente abona:</h2>
            <h2 className="view-pay-client">$ {order.pago}</h2>
          </div>
          <div className="div-view-pay-results">
            <h2 className="view-pay-results">Su cambio es:</h2>
            <h2 className="view-pay-client">$ {order.pago - order.price}</h2>
          </div>
        </>
      ) : null}
      <div className="div-btn-editar">
        <button onClick={handleEdit}className="btn-editar-pedido">Editar Pedido</button>
        <button
          onClick={() => navigate(`/editUser/${id}`)}
          className="btn-editar-usuario"
        >
          Editar Usuario
        </button>
      </div>
      <div className="view-purchase-footer">
        <button  className="view-btn-purchase">Finalizar Pedido</button>
      </div>
    </div>
  );
};

export default View;
