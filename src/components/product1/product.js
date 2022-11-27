import React from "react";
import style from './index.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartAppSlice.js";

const Products = ({product})=>{
    const dispatch = useDispatch();

 return(
    <div className={style.conteinerProducts}>
        <img className={style.imgProduct} src={product.imgUrl} alt={`foto de ${product.title}`}/>
        <h3 className={style.titleProduct}>{product.title}</h3>
        <span className={style.priceProduct}>${product.price}</span>
        <div>   
        <button  onClick={()=>{
            dispatch(addToCart(product))
        }}>.</button>
        </div>
    </div>
 )
}

export default Products;