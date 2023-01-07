import React from 'react';
import food from '../assets/food.jpeg';
import './rotstyle.css';


const Home = () => {
  return (
    <div className='text-containeer'>
      <div className='text1'>Food corner</div>
      <div className='text2'>INDIAN FOOD AT A CLICK</div>
        <button className='button'>ORDER NOW</button>
    <img src={food} />
    </div>
  )
}

export default Home;
