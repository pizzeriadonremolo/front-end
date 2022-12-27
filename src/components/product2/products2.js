import React from "react";
import style from "./index.module.css";
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
        <div className={style.conteinerData}>
          <h3 className={style.titleProduct}>{product.title}</h3>
          <div className={style.button}>
            <span className={style.priceProduct}>${product.price}</span>
            <Input product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products2;
