import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2() {
  console.log('Rendering Cards2'); // Log rendering

  return (
    <div className='cards'>
      <h1>Meet our 2024 SHPE x USC Executive Board!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/exec/daniel.jpg'
              text='Daniel Chavez Paz, President'
              path='https://www.linkedin.com/in/daniel-chavez-paz/'
            />
            <CardItem
              src='/images/exec/ethan.jpg'
              text='Ethan Ibarra, Internal Vice President'
              path='https://www.linkedin.com/in/ibarra-e/'
            />
            <CardItem
              src='/images/exec/alex.jpg'
              text='Alex Mesa Coria, External Vice President'
              path='https://www.linkedin.com/in/alexmcoria/'
            />
            <CardItem
              src='/images/exec/valeria.jpg'
              text='Valeria Echandy Santiago, Treasurer'
              path='https://www.linkedin.com/in/valeria-echandy-santiago/'
            />
            <CardItem
              src='/images/exec/jose.jpg'
              text='Jose Garcia Urias, Secretary'
              path='https://www.linkedin.com/in/urias-garcia-jose/'
            />
            <CardItem
              src='/images/exec/isabella.jpg'
              text='Isabella Cuervo, Fundraising Chair'
              path='https://www.linkedin.com/in/isabella-maria-cuervo/'
            />
            <CardItem
              src='/images/exec/maverick.jpg'
              text='Maverick Perez, Outreach Chair'
              path='https://www.linkedin.com/in/maverick-perez/'
            />
            <CardItem
              src='/images/exec/arantza.jpg'
              text='Arantza Lizbeth Sanchez, SHPEtina Chair'
              path='https://www.linkedin.com/in/arantza-lizbeth-sanchez-9b53282b4/'
            />
            <CardItem
              src='/images/exec/alex2.jpg'
              text='Alexander Vinalay, Community Service Chair'
              path='https://www.linkedin.com/in/alexander-vinalay-b670372b2/'
            />
            <CardItem
              src='/images/exec/layton.jpg'
              text='Layton Turner, Marketing Chair'
              path='https://www.linkedin.com/in/layton-turner-8a5976295/'
            />
            <CardItem
              src='/images/exec/chris.jpg'
              text='Christian Media, Corporate Chair'
              path='https://www.linkedin.com/in/medina-christian/'
            />
            <CardItem
              src='/images/exec/rico.jpg'
              text='Jerico Elli Arambulo, Social Chair'
              path='https://www.linkedin.com/in/jerico-elli-arambulo-703338265/'
            />
            <CardItem
              src='/images/exec/brad.jpg'
              text='Bradley Trevino, Professional Chair'
              path='https://www.linkedin.com/in/bradtrevi/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;