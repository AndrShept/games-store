import React from 'react'
import style from './index.module.scss'
export const CountItems = ({count}) => {
  return (
    <div className={style.count_items}>{count}</div>
  )
}
