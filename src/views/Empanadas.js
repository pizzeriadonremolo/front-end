import React,{useEffect, useState} from "react";
import { empanadasApi } from "../features/products.js";
import Products2 from "../components/product2/products2";
import Footer from "../components/footer/footer.js";
import Navbar from "../components/navBar/Navbar.js";
import Loader from "../components/loader/loader.js";
import style from './index.module.css'
import { useNavigate } from "react-router-dom";

const Empanadas = () => {
  const navigate = useNavigate();
  const [empanadasState, setEmpanadas] = useState(null);
  useEffect(()=>{
   empanadasApi(setEmpanadas);
 },[])

  return (
    <>
       <Navbar category='Empanadas' />
   <div>
     <h2 className={style.categorias}>Empanadas</h2>
     <div className={style.conteiner2}>

    {empanadasState!==null?(
      empanadasState.map(producto =>  <Products2 product={producto} key={producto.id}/>)
      ):(
        <Loader />
        )}
   </div>
  </div>
  <Footer to = {() =>  navigate("/carrito")} text={'Ver mi pedido'} />
    </>
  );
};

export default Empanadas;
