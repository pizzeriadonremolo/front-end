import React, { useState } from "react";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartAppSlice.js";
import Input from "../inputproduct/input";

const Products2 = ({ product }) => {
 
  return (
    <div className={style.conteinerProducts}>
      <div className={style.contentProducts}>
        <div className={style.divImgProduct}>
          <img
            className={style.imgProduct}
            src={product.imgUrl}
            alt={`${product.title}`}
          />
        </div>
        <div className="product-2-title-price">
          <h3 className={style.titleProduct}>{product.title}</h3>
          <div className="product-2-price-btn">
            <span className={style.priceProduct}>${product.price}</span>
            <Input product={product}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Products2;
