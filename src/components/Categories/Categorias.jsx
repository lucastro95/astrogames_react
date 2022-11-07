import React from "react";
import { useSelector } from "react-redux";
import { CategoriesLayout } from "./CategoriesStyles";
import Categoria from "./Categoria";

const Categorias = () => {
  const Categories = useSelector((state) => state.categories.categories);
  return (
    <>
      <h3 style={{ color: "#02b3ab", fontSize: "2rem" }}>Categorías</h3>
      <CategoriesLayout>
        {Categories.map((category) => (
          <Categoria key={category.id} {...category} />
        ))}
      </CategoriesLayout>
    </>
  );
};

export default Categorias;
