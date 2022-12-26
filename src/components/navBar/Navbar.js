import style from "./index.module.css";
import Category from "./Category";

const categories = ["Pizzas", "Empanadas", "Postres", "Bebidas"];

const Navbar = () => {
  return (
    <>
      <h2 className="subtitle">Categorias</h2>
      <div className={style.container}>
        {categories.map((e) => (
          <Category category={e} key={e} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
