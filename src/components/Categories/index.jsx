import React from "react";
import s from "./index.module.css";
import CategoryCard from "../CategoryCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { load_categories } from "../../requests/categories_req";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, []);

  return (
    <div className={s.categories_container}>
      <div className={s.categories_title}>
        <p>Categories</p>
        <Link to="/categories_page">
          <button>All categories</button>
        </Link>
      </div>

      <div className={s.categories_item}>
        {categories.map((el, index) =>
          index >= 0 && index <= 3 ? <CategoryCard key={el.id} {...el} /> : ""
        )}
      </div>
    </div>
  );
}
