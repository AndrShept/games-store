import React from 'react'
import style from './index.module.scss'

export const GameCover = ({img}) => {
  return (
    <div><img className={style.game_cover} src={img} alt="" /></div>
  )
}
