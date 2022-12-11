import React from "react";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartAppSlice.js";

const Products2 = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.conteinerProducts}>
      <div className={style.contentProducts}>
        <div className={style.divImgProduct}>
          <img
            className={style.imgProduct}
            src={product.imgUrl}
            alt={`foto de ${product.title}`}
          />
        </div>
        <div className="product-2-title-price">
          <h3 className={style.titleProduct}>{product.title}</h3>
          <div className="product-2-price-btn">
            <span className={style.priceProduct}>${product.price}</span>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products2;
