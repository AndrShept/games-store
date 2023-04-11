import React from 'react'
import style from './index.module.scss'
import {gameList} from '../../assets/gameList.js'
import { GameItem } from '../../components/GameItem'

export const HomePage = () => {
  
  return (

    <div className={style.homePage}>
      
     {gameList.map((game) => <GameItem game={game} key={game.id}/>)}
    </div>
  )
}
