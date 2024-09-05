import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import alex from './images/exec/alex.jpg';
import alex2 from './images/exec/alex2.jpg';
import arantza from './images/exec/arantza.jpg';
import brad from './images/exec/brad.jpg';
import chris from './images/exec/chris.jpg';
import daniel from './images/exec/daniel.jpg';
import ethan from './images/exec/ethan.jpg';
import isabella from './images/exec/isabella.jpg';
import jose from './images/exec/jose.jpg';
import layton from './images/exec/layton.jpg';
import maverick from './images/exec/maverick.jpg';
import push from './images/exec/push.jpg';
import rico from './images/exec/rico.jpg';
import valeria from './images/exec/valeria.jpg';

function CardsAboutUs() {
  return (
    <div className='cards cards-about-us'>
      <h1>Meet our 2024 SHPE x USC Executive Board!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items president-row'>
            <CardItem
              src={daniel}
              text='Daniel Chavez Paz, President'
              path='https://www.linkedin.com/in/daniel-chavez-paz/'
            />
          </ul>
          <ul className='cards__items vps-row'>
            <CardItem
              src={ethan}
              text='Ethan Ibarra, Internal Vice President'
              path='https://www.linkedin.com/in/ibarra-e/'
            />
            <CardItem
              src={alex}
              text='Alex Mesa Coria, External Vice President'
              path='https://www.linkedin.com/in/alexmcoria/'
            />
          </ul>
          <ul className='cards__items secretary-treasurer-row'>
            <CardItem
              src={valeria}
              text='Valeria Echandy Santiago, Treasurer'
              path='https://www.linkedin.com/in/valeria-echandy-santiago/'
            />
            <CardItem
              src={jose}
              text='Jose Garcia Urias, Secretary'
              path='https://www.linkedin.com/in/urias-garcia-jose/'
            />
          </ul>
          <ul className='cards__items chairs-row'>
            <CardItem
              src={isabella}
              text='Isabella Cuervo, Fundraising Chair'
              path='https://www.linkedin.com/in/isabella-maria-cuervo/'
            />
            <CardItem
              src={maverick}
              text='Maverick Perez, Outreach Chair'
              path='https://www.linkedin.com/in/maverick-perez/'
            />
            <CardItem
              src={arantza}
              text='Arantza Lizbeth Sanchez, SHPEtina Chair'
              path='https://www.linkedin.com/in/arantza-lizbeth-sanchez-9b53282b4/'
            />
          </ul>
          <ul className='cards__items chairs-row'>
            <CardItem
              src={alex2}
              text='Alexander Vinalay, Community Service Chair'
              path='https://www.linkedin.com/in/alexander-vinalay-b670372b2/'
            />
            <CardItem
              src={layton}
              text='Layton Turner, Marketing Chair'
              path='https://www.linkedin.com/in/layton-turner-8a5976295/'
            />
            <CardItem
              src={chris}
              text='Christian Media, Corporate Chair'
              path='https://www.linkedin.com/in/medina-christian/'
            />
          </ul>
          <ul className='cards__items chairs-row'>
            <CardItem
              src={rico}
              text='Jerico Elli Arambulo, Social Chair'
              path='https://www.linkedin.com/in/jerico-elli-arambulo-703338265/'
            />
            <CardItem
              src={brad}
              text='Bradley Trevino, Professional Chair'
              path='https://www.linkedin.com/in/bradtrevi/'
            />
            <CardItem
              src={push}
              text='Pushpendra Shekhawat, Webmaster'
              path='https://www.linkedin.com/in/pushapshekhawat/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsAboutUs;