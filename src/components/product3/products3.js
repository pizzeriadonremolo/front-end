import React from "react";
import style from './index.module.css'
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../../features/cartAppSlice.js";

const Products3 = ({product})=>{
  const dispatch = useDispatch();
  return(
    <div className={style.conteinerProducts}>
       <img className={style.imgProduct} src={product.imgUrl} alt={`foto de ${product.title}`}/>
        <div className={style.data}>
          <div className={style.top}>
          <h3 className={style.titleProduct}>{product.title}</h3>
          <button className={style.delete} onClick = {()=> dispatch(removeFromCart(product))} />
          </div>
            <div className={style.count}>
              <span className={style.priceProduct}>${product.price * product.cartQuantity}</span>
              <button className={style.menos} onClick = {()=> dispatch(decreaseCart(product))} />
              <span className={style.span}>{product.cartQuantity}</span>
              <button className={style.mas}  onClick = {()=> dispatch(addToCart(product))} />
           </div>
        </div>
    </div>
    ) 
   }
   
   export default Products3;