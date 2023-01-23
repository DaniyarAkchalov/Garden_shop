import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ id, title, image }) {
  const link = `../categories_page/${id}`;

  const img = `http://localhost:3333${image}`;

  return (
    <Link to={link} className={s.categories_card}>
      <div className={s.categories}>
        <img src={img} alt={title} />
        <p className={s.title}>{title}</p>
      </div>
    </Link>
  );
}
