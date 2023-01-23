import React from "react";
import s from "./index.module.css";
import gnome from "../../media/gnome.png";

export default function Discount() {
  return (
    

    <section className={s.discount_section}>
      <div className={s.greens}>
        <img alt="Gnome" src={gnome} />
      </div>
      <div className={["wrapper", s.discount_block].join(" ")}>
        <div className={s.info_block}>
          <h2>Discount 5%</h2>
          <h3>on first order</h3>
          <div>
            <input type="text" name="phone" placeholder="  + 7 " /> <br />
            <button>Get a discount</button>
          </div>
        </div>
      </div>
    </section>
  );
}
