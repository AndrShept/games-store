import React from 'react';
import './index.scss';
import classNames from 'classnames';

export const Button = ({ type, onClick, children, size = 's' }) => {
  // eslint-disable-next-line no-unused-vars
  const btnClass = classNames({
    "btn": true,
    "btn_primary": type === 'primary',
    "btn_secondary": type === 'secondary',
    "btn_small": size === 's',
    "btn_medium": size === 'm',
  });
  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};
