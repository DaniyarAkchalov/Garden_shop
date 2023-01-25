import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cart";

export default function ProductCard({
  id,
  title,
  image,
  price,
  discont_price,
  category,
  categoryId,
}) {
  const link = `/products/${category}`;
  const discount = Math.round((1 - +discont_price / +price) * 100);
  const img = `http://localhost:3333${image}`;

  const dispatch = useDispatch();

  const add_to_cart = () =>
    dispatch(
      addToCart({
        id,
        title,
        image,
        price,
        discont_price,
        category,
        categoryId,
      })
    );

  return (
    <div className={s.products_card}>
      <div className={s.image}>
        <Link to={link}>
          <img src={img} alt={title} />
        </Link>
        <button className={s.button} onClick={add_to_cart}>
          {" "}
          Add to cart
        </button>
      </div>

      <div className={s.price_info}>
        {discont_price === "" ? (
          <p>{price}</p>
        ) : (
          <>
            <p className={s.discont_price}>{discont_price.toFixed(2)} €</p>
            <p
              style={{ color: "gray", textDecoration: "line-through" }}
              className={s.price}
            >
              {price} €
            </p>
            <p className={s.discount}>{discount}%</p>
          </>
        )}
      </div>
      <Link to={link} className={s.product_title}>
        <p className={s.title}>{title}</p>
      </Link>
    </div>
  );
}
