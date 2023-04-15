import React from 'react';
import style from './index.module.scss';

export const GameCover = ({ game }) => {
  return (
    <div>
      <img className={style.gameCover} src={game.image} alt='' />
    </div>
  );
};
