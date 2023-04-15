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
  const Ref = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (Ref.current && !event.composedPath().includes(Ref.current)) {
        setIsOpenCart(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    const json = JSON.stringify(items);
    localStorage.setItem('cart', json);
  }, [items]);

  return (
    <div ref={Ref} className={style.cartBlock}>
      {items.length > 0 && <CountItems count={items.length} />}
      <FiShoppingCart
        size={28}
        className={style.cartIcon}
        onClick={() => setIsOpenCart(!isOpenCart)}
      />
      {items.length > 0 ? (
        <span className={style.totalPrice}>{totalPrice} грн.</span>
      ) : null}
      {isOpenCart && <CartItems items={items} totalPrice={totalPrice} />}
    </div>
  );
};
