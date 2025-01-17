import React from 'react'
import classes from './Card.module.css';

function Card({data}) {
  return (
    <div className={classes['card-container']}>
        <div> <img src={data?.image} width={200} height={150} /></div>
        <div>{data?.title}</div>
    </div>
  )
}

export default Card