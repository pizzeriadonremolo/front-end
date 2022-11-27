import React from "react";
import style from './loader.module.css'
const Loader = () =>{
    return(

<div className={style.spinner}>
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>

    )
}

export default Loader;