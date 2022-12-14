import { useLocation, useNavigate } from "react-router-dom";
import style from './index.module.css'



const Category = ({ category }) => {
    const location = useLocation();
    const navigate =useNavigate();
    return(
    <>
    <div onClick={()=>{navigate(`/${category}`)}} className={style.button}
            style={
            location.pathname === `/${category}`
              ? {
                  backgroundColor: "#5171A5",
                  color: "white",
                }
              : null
          }
    >
        <img src={`/img/${category}.png`} alt={category}/>
        <p className={style.title}>{category}</p>
    </div>
    </>
    )
  };

  export default Category;