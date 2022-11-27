import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { helpHttp } from '../features/httpServer';
import style from './index.module.css';
import Loader from '../components/loader/loader'

const api = helpHttp();

const View = () => {
  const { id } = useParams();
 
  const [order, setOrder] = useState(null);

  useEffect(()=>{
    api.get(`/checkout/order/${id}`, {}).then(res =>{
      setOrder(res)
    })
  },[])
    
  return (
    <div>
        <h2 className={style.categorias}>Su compra se ha efectuado exitosamente!</h2>
        <h2 className={style.categorias}> su pedido: </h2>
        <ul>
        {
          order?
          order.order.map(order =>(
            <li key={order} className={style.categorias}>{order}</li>
            ))
            :(
              <Loader />
            )
        }
        </ul>
        {
          order? (
          <div>
          <h2 className={style.categorias}> se abono con: {order.pago} </h2>
          <h2 className={style.categorias}> su vuelto: {order.pago - order.price} </h2>
          </div>
            ):null
          }
          
    </div>
  )
}

export default View;