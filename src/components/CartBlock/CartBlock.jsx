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
  const sortRef = React.useRef()

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(event.composedPath());
      if (sortRef.current && !event.composedPath().includes(sortRef.current)){
        setIsOpenCart(false);
      }
      
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    
    <div ref={sortRef} className={style.cart_block}>
      <CountItems count={items.length} />
      <FiShoppingCart 
        size={28}
        className={style.cart_icon}
        onClick={() => setIsOpenCart(!isOpenCart)}
      />
      {items.length > 0 ? (
        <span className={style.total_price}>{totalPrice} грн.</span>
      ) : null}
      {isOpenCart &&  <CartItems items={items} totalPrice={totalPrice}  /> }
      
    </div>
    
  );
};
