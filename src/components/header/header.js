import React from "react";
import { useNavigate } from "react-router-dom";
import style from './index.module.css'

export default function Logo(){
    const navigate = useNavigate();
return(
    <>
    <button className={style.buttonHome}  onClick={() =>  navigate("/")}/>
    <div className={style.logo}></div>
    </>
)

}