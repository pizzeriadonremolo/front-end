import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./index.module.css";

export default function Logo() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location. pathname !== '/'?
      <div className={style.buttonHome} onClick={() => navigate("/")} />
    :null}
      <div className={style.logo}>
        <img src="./img/Logo.png" alt="Don rembolo" />
      </div>
    </>
  );
}
