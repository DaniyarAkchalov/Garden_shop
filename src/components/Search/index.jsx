import React from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../store/reducers/products";
import { searchPrice } from "../../store/reducers/products";

export default function Search() {
  const dispatch = useDispatch();

  const order = (event) => dispatch(sortProducts(event.target.value));

  const search_price = (event) => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPrice({ min_value, max_value }));
  };

  return (
    <div className={s.sort_section}>

      <form onSubmit={search_price} className={["wrapper", s.search].join(" ")}>
        <div className={s.search_price}>
          <span>Price</span>
          <input type="text" placeholder="from" min='0' />
          <input type="text" placeholder="up to" />
          <button>Search</button>
        </div>
        <div className={s.search_discount}>
          <span>Discount</span>
          <input type="checkbox" />
        </div>
        <div>
          <span>Sort by:</span>
          <select onInput={order} className={s.sort_select}>
            <option value="default">default</option>
            <option value="title">name</option>
            <option value="price">price</option>
          </select>
        </div>
      </form>
    </div>
  );
}
