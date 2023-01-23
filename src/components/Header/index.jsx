import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import logo from "../../media/logo.png";
import shopping_bag from "../../media/shopping_bag.png";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo_block}>
        <img src={logo} alt="logo" />
        <Link to="/categories_page" className={s.catalog}>
          Catalog
        </Link>
      </div>

      <nav>
        <ul className={s.nav_block}>
          <Link to="/categories_page" className={s.category}>
            Category
          </Link>
          <li>Coupon</li>
          <Link to= '/products/all' className={s.sale}>Sale</Link>
          <li>Contacts</li>
          <Link to="/cart">
            <img src={shopping_bag} alt="shopping_bag" />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
