import React from 'react'
import style from './index.module.scss'
import {gameList} from '../../assets/gameList.js'
import { GameItems } from '../../components/GameItems'

export const HomePage = () => {
  
  return (

    <div className={style}>
      
     {gameList.map(item => <GameItems item={item}/>)}
    </div>
  )
}
