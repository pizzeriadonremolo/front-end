import axios from "axios";


const recommended = async (state)=>{
    const peticion = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/recomendados`);
     state(peticion?.data);
};

const pizzasApi = async (state)=>{
    const peticion = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/pizzas`);
     state(peticion?.data);
};
const empanadasApi = async (state)=>{
    const peticion = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/empanadas`);
    state(peticion?.data);
};
const postresApi = async (state)=>{
    const peticion = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/postres`);
    state(peticion?.data);
};
const bebidasApi = async (state)=>{
    const peticion = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/bebidas`);
    state(peticion?.data);
}

export{
    recommended,
    pizzasApi,
    empanadasApi,
    postresApi,
    bebidasApi
}

