import React from 'react'
import style from './index.module.scss'
export const CountItems = ({count}) => {
  return (
    <div className={style.countItems}>{count}</div>
  )
}
