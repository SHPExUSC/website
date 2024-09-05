import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards1() {
  return (
    <div className='cards'>
      <h1>Welcome to the SHPExUSC 2024 Website!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/exec/exec.jpg'
              text='Meet the 2024 SHPExUSC Executive Board'
              path='/aboutus'
            />
            <CardItem
              src='/images/insta.png'
              text='Check out our Instagram!'
              path='https://www.instagram.com/shpe_uscarolina/?hl=en'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards1;