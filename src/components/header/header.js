import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./index.module.css";

export default function Logo() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname !== "/" ? (
        <div className={style.buttonHome} onClick={() => navigate("/")} />
      ) : null}
      <div className={style.logo}>
        <img
          src="https://res.cloudinary.com/da8x3x8nz/image/upload/v1671058523/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Navbar/Logo_rrz3fo.png"
          alt="Don rembolo"
        />
      </div>
    </>
  );
}
