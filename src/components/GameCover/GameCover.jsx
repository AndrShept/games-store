import React from 'react'
import style from './index.module.scss'

export const GameCover = ({img}) => {
  return (
    <div><img className={style.gameCover} src={img} alt="" /></div>
  )
}
