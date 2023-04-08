import React from 'react'
import style from './index.module.scss'
import {FiShoppingCart} from 'react-icons/fi'

export const CartBlock = () => {
  return (
    <div className={style.cart_block}>
        <FiShoppingCart size={25} className={style.cart_icon}/>
        <span className={style.total_price}>2000 грн.</span>
    </div>
  )
}
