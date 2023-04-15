import React from 'react';
import style from './index.module.scss';
import { GameCover } from '../GameCover/GameCover';
import { GameBuy } from '../GameBuy';
import { Genre } from '../Genre';
import { Link } from 'react-router-dom';
export const GameItem = ({ game }) => {
  return (
    // <Link to="/info">
    <div className={style.gameItem}>
      <Link to='/info'>
        <GameCover game={game} />
      </Link>
      <div className={style.details}>
        <div className={style.title}>{game.title}</div>
        <div className={style.genre}>
          {game.genres.map((genre, i) => (
            <Genre key={i} genre={genre} />
          ))}
        </div>
        <div className={style.buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
    // </Link>
  );
};
