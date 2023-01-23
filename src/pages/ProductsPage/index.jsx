import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { load_products } from "../../requests/products.req";
import ProductCard from "../../components/ProductCard";
import s from "./index.module.css";
import Search from "../../components/Search";

export default function ProductsPage() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const { category } = useParams();

  useEffect(() => {
    dispatch(load_products(category));
  }, []);

  let categories_title = categories[category - 1].title;

  return (
    <section>
      <div className={s.products_container}>
        {products.length === 0 ? (
          <p> Loading ...</p>
        ) : (
          <div>
            <h1 className={s.categories_title}>{categories_title}</h1>
            <Search />
            <div className={s.products}>
              {products.map((el) => (
                <ProductCard key={el.id} {...el} category={el.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
