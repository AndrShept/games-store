import React from 'react';
import style from './index.module.scss';
import { Button } from '../Button/Button';

export const GameBuy = ({ game }) => {
  const [addCart, setAddCart] = React.useState(false)
  return (
    <div className={style.game_buy}>
      <span className={style.price}>{game.price} грн.</span>
      <Button onClick={() => setAddCart(!addCart)} type={addCart?'secondary': 'primary'} size='s'>{addCart ? "Видалити з корзини" :" Добавити в корзину"}</Button>
    </div>
  );
};
