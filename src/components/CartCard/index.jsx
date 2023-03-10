import React from 'react';
import s from './index.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { decrementCount, incrementCount, deleteProduct } from '../../store/reducers/cart';
import { useDispatch } from 'react-redux';

export default function CartCard({ id, title, price, discont_price, image, count }) {

  const dispatch = useDispatch();

  let src_img = `http://localhost:3333${image}`;

  return (
    <div className={s.cart_section}>
      <hr className={s.head} />

      <div className={s.container}>
        <div className={s.left}>
          <img className={s.image} src={src_img} alt="product" />
          <div>
            <div className={s.title}>{title}
              <CloseOutlined className={s.cross} onClick={() => dispatch(deleteProduct(id))} />
            </div>

            <div className={s.buttons}>
              <button onClick={() => dispatch(decrementCount(id))}>-</button>
              {count}
              <button onClick={() => dispatch(incrementCount(id))}>+</button>
            </div>
          </div>
        </div>

        <div className={s.right}>
          <div className={s.price}>{(discont_price * count).toFixed(1)}</div>
          <div className={s.discont_price}>{(price * count).toFixed(1)}</div>
        </div>
      </div>
    </div>
  )
}