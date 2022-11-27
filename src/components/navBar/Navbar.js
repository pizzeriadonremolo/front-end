import React from "react";
import style from './index.module.css'
import { useNavigate } from "react-router-dom";

const Navbar = ({category}) => {
  
  const navigate = useNavigate();
  return (
    <div>
       <h2 className={style.categorias}>categorias</h2>
      <nav className={style.nav}>
          <button
           style={category==='Pizzas'?(
            {
              backgroundColor:'#5171A5',
              color:'white'
            }
          ):null}   
            className={style.buttonNavPizza}
            onClick={() =>  navigate("/pizzas")}
          >
           <span className={style.title}> pizzas</span>
          </button>
     
     
          <button
           style={category==='Empanadas'?(
            {
              backgroundColor:'#5171A5',
              color:'white'
            }
          ):null}   
           className={style.buttonNavEmpanada}
           onClick={() =>  navigate("/empanadas")}
          >
           <span> Empanadas</span>
          </button>
     
       
          <button
            style={category==='Bebidas'?(
              {
                backgroundColor:'#5171A5',
                color:'white'
              }
            ):null}   
            className={style.buttonNavBebidas}
            onClick={() =>  navigate("/bebidas")}
            >
           <span> Bebidas</span>
          </button>
  
       
          <button
           style={category==='Postres'?(
            {
              backgroundColor:'#5171A5',
              color:'white'
            }
          ):null}   
            className={style.buttonNavPostre}
            onClick={() =>  navigate("/postres")}
            >
             <span>Postres</span>
          </button>
      
          </nav>
    </div>
  );
};

export default Navbar;
