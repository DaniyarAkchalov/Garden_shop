import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import CartCard from '../../components/CartCard';


export default function CartPage() {

  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const submit = data => console.log(data);

  const numberCart = /^\d+$/;

  const phoneRegister = register('phone', {
    required: '* The field "phone" is required',
    pattern: {
      value: numberCart,
      message: '* Not valid number format'
    }
  });

  return (
    <div className={s.cart_page}>

      <div className={s.cart_title}>
        <p>Cart</p>
      </div>

      <div className={s.cart_section}>
        <div>
          <div className={s.cart_header}>
            <p>Main / Cart</p>
            <Link to='/'>Back to shop <RightOutlined className={s.right} /> </Link>
          </div>

          <div className={s.cart_card}>
            {
              state.map(el => <CartCard key={el.id} {...el} />)
            }
          </div>
        </div>

        <div className={s.cart_score}>
          <h1>Order details</h1>

          <div className={s.sum}>
            <h2>Sum</h2>
            <p>{
              state.reduce((prev, { count, discont_price }) => prev + discont_price * count, 0)
            }</p>
          </div>

          <form onSubmit={handleSubmit(submit)} className={s.submit}>
            <input className={s.submit_input} type="tel" name='phone' placeholder='Your telephone number' {...phoneRegister} />
            <button>Order</button>
          </form>
        </div>

        <div className={s.error}>
          {errors.phone && <p>{errors.phone?.message}</p>}
        </div>
      </div>

     

    </div>
  )
}

