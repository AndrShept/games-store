import React from 'react';
import style from './index.module.scss';

export const GameCover = ({ game , handleClick}) => {
  return (
    <div>
      <img onClick={handleClick} className={style.gameCover} src={game.image} alt='' />
    </div>
  );
};
