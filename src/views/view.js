import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  api  from "../features/httpServer";
import "./view.css";
import Loader from "../components/loader/loader";
const View = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    api.get(`/checkout/order/${id}`, {}).then((res) => {
      setOrder(res);
    });
  }, []);

  return (
    <div className="view-purchase-container">
      <h2 className="view-purchase-title">Su Orden ha sido procesada</h2>
      <hr className="view-line" />
      <ul className="view-purchase-details">
        {order ? (
          order.order.map((order) => (
            <li key={order} className="view-purchase-list">
              {order}
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
      <hr className="view-line" />
      {order ? (
        <>
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
      <div className="view-purchase-footer">
        <button className="view-btn-purchase">Finalizar Pedido</button>
      </div>
    </div>
  );
};

export default View;
