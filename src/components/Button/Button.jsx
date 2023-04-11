import React from 'react';
import './index.scss';
import classNames from 'classnames';

export const Button = ({ type, onClick, children, size = 's' }) => {
  // eslint-disable-next-line no-unused-vars
  const btnClass = classNames({
    "btn": true,
    "primary": type === 'primary',
    "secondary": type === 'secondary',
    "btnBuy": type === 'btnBuy',
    "small": size === 's',
    "medium": size === 'm',
  });
  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};
