import React from 'react';
import style from './index.module.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { CartItems } from '../CartItems';
import { useSelector } from 'react-redux';
import { CountItems } from '../CountItems';


export const CartBlock = () => {
  const [isOpenCart, setIsOpenCart] = React.useState(false);
  const items = useSelector((state) => state.cart.itemInCart);
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    
    <div className={style.cart_block}>
      <CountItems count={items.length} />
      <FiShoppingCart
        size={28}
        className={style.cart_icon}
        onClick={() => setIsOpenCart(!isOpenCart)}
      />
      {items.length > 0 ? (
        <span className={style.total_price}>{totalPrice} грн.</span>
      ) : null}
      {isOpenCart &&  items.map(item => <CartItems items={items} totalPrice={totalPrice} />) }
      
    </div>
    
  );
};
