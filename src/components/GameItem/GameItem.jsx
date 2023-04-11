import React from 'react';
import style from './index.module.scss';
import { GameCover } from '../GameCover/GameCover';
import { GameBuy } from '../GameBuy';
import { Genre } from '../Genre';
export const GameItem = ({ game }) => {
  return (
    
    <div className={style.gameItem}>
      <GameCover img={game.image}/>
      <div className={style.details}>
        <div className={style.title}>{game.title}</div>
        <div className={style.genre}>
          {
          game.genres.map((genre, i) => <Genre key={i} genre={genre}/>)
          }
        </div>
        <div className={style.buy}>
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
    
  );
};
