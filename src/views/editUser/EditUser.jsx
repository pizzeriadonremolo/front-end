import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Checkout from "../Checkout";
import api from "../../features/httpServer";
import { useState } from "react";

const EditUser = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    api.get(`/checkout/order/${id}`, {}).then((res) => {
      setOrder(res.data);
    });
  }, [id]);

  return order ? <Checkout oldOrder={order} /> : null;
};

export default EditUser;
