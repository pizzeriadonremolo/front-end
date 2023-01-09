import style from "./index.module.css";
import Category from "./Category";

const categories = [
  {
    id: 1,
    title: "Pizzas",
    imgC: "https://res.cloudinary.com/da8x3x8nz/image/upload/v1671058486/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Navbar/Pizzas_bjsrbc.png",
  },
  {
    id: 2,
    title: "Empanadas",
    imgC: "https://res.cloudinary.com/da8x3x8nz/image/upload/v1671058498/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Navbar/empanadas_a5slyp.png",
  },
  {
    id: 3,
    title: "Postres",
    imgC: "https://res.cloudinary.com/da8x3x8nz/image/upload/v1671058506/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Navbar/Postres_lt0ufc.png",
  },
  {
    id: 4,
    title: "Bebidas",
    imgC: "https://res.cloudinary.com/da8x3x8nz/image/upload/v1671058513/Pizzer%C3%ADa%20Don%20Remolo/Don%20Remolo%20Navbar/bebidas_ji0yta.png",
  },
];

const Navbar = () => {
  return (
    <>
      <h2 className="subtitle">Categorias</h2>
      <div className={style.container}>
        {categories.map((e) => (
          <Category key={e.id} imageC={e.imgC} category={e.title} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
