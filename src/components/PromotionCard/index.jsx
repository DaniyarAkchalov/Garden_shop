import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

export default function PromotionCard({
  id,
  title,
  image,
  price,
  discont_price,
  }) {
  const link = `../products/${id}`;
  const discount = Math.round((1 - +discont_price / +price) * 100);

  const img = `http://localhost:3333${image}`;

  return (
    <Link to={link} className={s.promotion_card} id='promotion'>
      <div className={s.promotion}>
        <img src={img} alt={title} />
        <div className={s.price_text}>
          <p className={s.discont_price}>{discont_price} €</p>
          <p
              style={{ color: "gray", textDecoration: "line-through" }}
              className={s.old_price}>  {price} €
            </p>
          <p className={s.discount}>{discount} %</p>
        </div>

        <div>
          <p className={s.title}>{title}</p>
        </div>
      </div>
    </Link>
  );
}
