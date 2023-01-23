import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_categories } from "../../requests/categories_req";
import CategoryCard from "../../components/CategoryCard";
import s from "./index.module.css";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, []);

  return categories.length === 0 ? (
    "LOADING..."
  ) : (
    <div className={s.categories_section} id={s.categories_section}>
      <h1>Categories</h1>

      <div className={s.categories_container}>
        {categories.map((el) => (
          <CategoryCard key={el.id} {...el} category={el.id} />
        ))}
      </div>
    </div>
  );
}
