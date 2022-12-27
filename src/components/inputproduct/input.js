import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, resetTotalAmount } from "../../features/cartAppSlice";

export default function Input({ product }) {
    switch (product.category) {
        case 'Pizzas':
            var max = 8;
            break;
        case 'Postres':
            var max = 12;
            break;
        case 'Bebidas':
            var max = 8;
            break;
        case 'Empanadas':
            var max = 24;
            break;
    
    }
  const [cant, setCant] = useState(0);
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const i = cart.findIndex((item) => item.id === product.id);
    if (i >= 0) {
      setCant(cart[i].cartQuantity);
    }
  }, []);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    if (value < 100 && value > -1) {
      setCant(e.target.value);
      dispatch(addToCart({ ...product, cartQuantity: value }));
      dispatch(resetTotalAmount());
    }
  };
  return <input type="number" min={0} max={max} value={cant} onChange={handleChange} />;
}
