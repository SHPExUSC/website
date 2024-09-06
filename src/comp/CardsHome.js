import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import exec from './images/exec/exec.jpg';
import insta from './images/insta.png';
import AboutUs from './pages/AboutUs';

function CardsHome() {
  return (
    <div className='cards cards-home'>
      <h1>Welcome to the SHPExUSC 2024 Website!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items home-row'>
            <CardItem
              src={exec}
              text='Meet the 2024 SHPExUSC Executive Board'
              path={AboutUs}
            />
            <CardItem
              src={insta}
              text='Check out our Instagram!'
              path='https://www.instagram.com/shpe_uscarolina/?hl=en'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsHome;