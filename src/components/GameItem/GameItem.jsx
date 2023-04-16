import React from 'react';
import style from './index.module.scss';
import { GameCover } from '../GameCover/GameCover';
import { Genre } from '../Genre';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItemsInfo } from '../../redux/slice/itemInfoSlice';
import { GameBuy } from '../GameBuy/GameBuy';
export const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setItemsInfo(game));
    navigate(`app/${game.title}`);
  };
  return (
    <div className={style.gameItem}>
      <div className={style.block}>
        <GameCover game={game} handleClick={handleClick} />
      </div>

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
  );
};
