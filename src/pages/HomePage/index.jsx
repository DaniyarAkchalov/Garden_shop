import React from "react";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import Discount from "../../components/Discount";
import Products from "../../components/Products";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Categories/>
      <Discount />
      <Products />
    </div>
  );
}
