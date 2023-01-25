import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "../../requests/product_req";
import s from "./index.module.css";
import { addToCart } from "../../store/reducers/cart";

export default function ProductPage() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  const product_id = product.id

  
  useEffect(() => {
    dispatch(load_product(id));
  }, []);

  const discount = Math.round(((product.price - product.discont_price) / product.price) * 100);

  const { title, description, discont_price, price, image } = product;

  const add_to_cart = () =>
    dispatch(addToCart({id: product_id, title, price, discont_price, image }));
    

   const img = `http://localhost:3333${image}`;

  return (
    <div>
      <div className={s.product_item}>
        <div>
          <div className={s.title}>{title}</div>
          <img className={s.image} src={img} alt="product" />
        </div>

        <div className={s.product_details}>
          <div className={s.prices}>
            <h1>{discont_price}</h1>
            <h2>{price}</h2>
            <p>{discount} %</p>
          </div>

          <button onClick={add_to_cart}>Add to cart</button>

          <div className={s.border}></div>

          <div className={s.description}>
            <h1>Description</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
