import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { load_products } from "../../requests/products.req";
import ProductCard from "../../components/ProductCard";
import s from "./index.module.css";
import { sortProducts } from "../../store/reducers/products";
import { searchPrice } from "../../store/reducers/products";

export default function ProductsPage() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const { category } = useParams();

  useEffect(() => {
    dispatch(load_products(category));
  }, []);

  let categories_title = categories[category - 1].title;

  const order = (event) => dispatch(sortProducts(event.target.value));

  const search_price = (event) => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPrice({ min_value, max_value }));
  };

  return (
    <section>
      <div className={s.products_container}>
        {products.length === 0 ? (
          <p> Loading ...</p>
        ) : (
          <div>
            <h1 className={s.categories_title}>{categories_title}</h1>

            <div className={s.sort_section}>
              <div>
                <span>Price:</span>
                <form onSubmit={search_price} className={s.search_form}>
                  <input type="number" name="min" placeholder="from" min="0" />
                  <input type="number" name="max" placeholder="to" />
                  <button>Search</button>
                </form>
              </div>

              <div>
                <span>Sort:</span>
                <select onInput={order} className={s.sort_select}>
                  <option value="default">default</option>
                  <option value="title">name</option>
                  <option value="price">price</option>
                </select>
              </div>
            </div>

            <div className={s.products}>
              {products
                .filter((el) => !el.hide_mark)
                .map((el) => (
                  <ProductCard key={el.id} {...el} category={el.id} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
