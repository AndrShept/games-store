import React from 'react';
import style from './index.module.scss';
import { GameCover } from '../GameCover/GameCover';
import { GameBuy } from '../GameBuy';
import { Genre } from '../Genre';
export const GameItem = ({ game }) => {
  return (
    
    <div className={style.game_item}>
      <GameCover img={game.image}/>
      <div className={style.details}>
        <span className={style.title}>{game.title}</span>
        <div className={style.genre}>
          {
          game.genres.map(genre => <Genre genre={genre}/>)
          }
        </div>
        <div className={style.buy}>
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
    
  );
};
