import React from "react";
import s from "./index.module.css";
import PromotionCard from "../PromotionCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { load_products } from "../../requests/products.req";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => dispatch(load_products), []);

  return (
    <div className={s.productions_container}>
      <div className={s.productions_title}>
        <p>Promotion</p>
      </div>

      <div className={s.productions_item}>
        {
        products.map((el, index) => index >=0 && index<= 2 ? <PromotionCard key={el.id} {...el} />: '')
      }
      </div>
    </div>
  );
}
