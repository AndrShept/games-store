import React from 'react';
import style from './index.module.scss';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {setItemInCart,deleteItemFromCart} from '../../redux/slice/cartSlice'

export const GameBuy = ({ game }) => {
  // const [adddCart, setAdddCart] = React.useState(false);
  const items = useSelector ((state) => state.cart.itemInCart)
  const itemsInCart = items.some((item) => item.id === game.id)
  const dispatch = useDispatch();
  const setAddCart = () => {
    if (!itemsInCart){
    dispatch(setItemInCart(game))
    }
    else{
      dispatch(deleteItemFromCart(game.id))

    }

  }

  return (
    <div className={style.gameBuy}>
      <span className={style.price}>{game.price} грн.</span>
      <Button
        onClick={() => setAddCart()}
        type={itemsInCart ? 'secondary' : 'primary'}
        size='s'
      >
        {itemsInCart ? 'Видалити з корзини' : ' Добавити в корзину'}
      </Button>
    </div>
  );
};
