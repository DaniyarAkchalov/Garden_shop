import React from "react";
import { useForm } from "react-hook-form";
import s from "./index.module.css";
import gnome from "../../media/gnome.png";

export default function Discount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const submit = (data) => console.log(data);

  const numberPhone = /^\d+$/;

  const phoneRegister = register("phone", {
    required: '* The field "phone" is required',
    pattern: {
      value: numberPhone,
      message: "* Not valid number format",
    },
  });

  return (
    <section className={s.discount_section} id="discount">
      <div className={s.greens}>
        <img alt="Gnome" src={gnome} />
      </div>
      <div className={["wrapper", s.discount_block].join(" ")}>
        <div className={s.info_block}>
          <h2>Discount 5%</h2>
          <h3>on first order</h3>
          <div>
            <form onSubmit={handleSubmit(submit)} className={s.submit}>
              <input className={s.submit_input} type="text" name="phone" placeholder="  + 7 "  {...phoneRegister} /> <br />
              <button>Get a discount</button>
            </form>
            <div className={s.error}>
              {errors.phone && <p>{errors.phone?.message}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
