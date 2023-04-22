import React from 'react';
import style from './index.module.scss';
import cn from 'classnames';

export const Button = ({ type, onClick, children, size = 's' }) => {
  // eslint-disable-next-line no-unused-vars
  // const btnClass = classNames({
  //   "btn": true,
  //   "primary": type === 'primary',
  //   "secondary": type === 'secondary',
  //   "btnBuy": type === 'btnBuy',
  //   "small": size === 's',
  //   "medium": size === 'm',
  // });
  return (
    <button onClick={onClick} className={cn(
      {
        [style.btn]: true,
        [style.primary]: type === 'primary',
        [style.secondary]: type === 'secondary',
        [style.btnBuy]: type === 'btnBuy',
        [style.small]: size === 's',
        [style.medium]: size === 'm',
      }
    )}>
      {children}
    </button>
  );
};
