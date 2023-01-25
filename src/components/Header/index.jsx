import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import logo from "../../media/logo.png";
import shopping_bag from "../../media/shopping_bag.png";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo_block}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/categories_page" className={s.catalog}>
          Catalog
        </Link>
      </div>

      <nav>
        <ul className={s.nav_block}>
          <Link to="/categories_page" className={s.category}>
            Category
          </Link>
          <li className={s.coupon}>
            {" "}
            <a href="/#discount">Coupon</a>
          </li>
          <li>
            {" "}
            <a href="/#promotion">Sale</a>
          </li>

          <li>
            {" "}
            <a href="/#footer"> Contacts </a>
          </li>
          <Link to="/cart">
            <img src={shopping_bag} alt="shopping_bag" />
          </Link>
        </ul>
      </nav>
    </header>
  );
}
