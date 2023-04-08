import React from 'react'
import style from './index.module.scss'
export const Genre = ({genre}) => {
  return (
    <div className={style.genre}>{genre}</div>
  )
}
