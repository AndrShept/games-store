import React from 'react';
import style from './index.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
export const CartItems = ({ items, totalPrice, setIsOpenCart }) => {
  const dispatch = useDispatch();


  return (
    <div className={style.cart_items}>
      {items.map((item) => (
        <div key={item.id} className={style.item}>
          <div className={style.item_img}>
            <img className={style.img} src={item.image} alt='' />
          </div>
          <div className={style.item_title}>
            <span>{item.title}</span>
          </div>
          <div className={style.item_price}>
            <span> {item.price} грн.</span>
          </div>
          <AiOutlineClose className={style.delete_item}  size={26} onClick={() => dispatch(deleteItemFromCart(item.id))} />
        </div>
      ))}
      <br  className={style}/>
      <div className={style.cart_result}>
        <Button size='m' type='secondary'>
          {' '}
          Оформити заказ{' '}
        </Button>
        <span className={style.cart_result_text}>
          Загальна сума {totalPrice} грн
        </span>
      </div>
    </div>
  );
};
