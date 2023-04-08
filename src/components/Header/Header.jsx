import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';
import { CartBlock } from '../CartBlock';

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <Link  to='/' className={style.store_title}>Game Store</Link>
      </div>
      <div className={style.cart_btn_wrapper}>
        <CartBlock/>
      </div>
    </div>
  );
};
