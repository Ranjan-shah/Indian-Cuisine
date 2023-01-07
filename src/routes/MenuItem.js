import React from 'react'
import './rotstyle.css';

const MenuItem = (props) => {
  return (
    <div className='container'>
        <img  className='food-image' src={props.image} alt='foodimage'/>
        <div className='foodname'>{props.name}</div>
        <div className='price'>{props.price}</div>
    </div>
  )
}

export default MenuItem;