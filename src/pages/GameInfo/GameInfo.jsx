import React from 'react';
import style from './index.module.scss';
// import { Button } from '../../components/Button';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../components/GameBuy/GameBuy';


export const GameInfo = () => {
  const game = useSelector((state) => state.info.itemsInfo);
  // const game = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className={style.container}>
      <iframe
        className={style.video}
        src={game.video}
        title={game.title}
        frameBorder='0'
      >
        YOU TUBE VIDEO
      </iframe>
      <div className={style.block}>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        {/* <p className={style.price}>Ціна {game.price} грн.</p> */}
        <GameBuy  game={game}/>
      </div>
      
    </div>
  );
};
