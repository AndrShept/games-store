import React from 'react';
import style from './index.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { deleteItemFromCart } from '../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import { EmptyBasket } from '../EmptyBasket';
import { motion, AnimatePresence } from 'framer-motion';
export const CartItems = ({ items, totalPrice, setIsOpenCart }) => {

  const dispatch = useDispatch();

  return items.length > 0 ? (
    <AnimatePresence>
    <motion.div
      className={style.cartItems}
      transition={{  duration: 0.4 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
    >
      {items.length > 0 &&
        items.map((item) => (
          <div key={item.id} className={style.item}>
            <div className={style.itemImg}>
              <img className={style.img} src={item.image} alt='' />
            </div>
            <div className={style.itemTitle}>
              <span>{item.title}</span>
            </div>
            <div className={style.itemPrice}>
              <span> {item.price} грн.</span>
            </div>
            <AiOutlineClose
              className={style.deleteIcon}
              size={26}
              onClick={() => dispatch(deleteItemFromCart(item.id))}
            />
          </div>
        ))}

      <div className={style.cartResult}>
        <Button size='m' type='btnBuy'>
          Оформити заказ
        </Button>
        <span className={style.cartResultText}>
          Загальна сума {totalPrice} грн
        </span>
      </div>
    </motion.div>
    </AnimatePresence>
  ) : (
    <EmptyBasket />
  );
};
