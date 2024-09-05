import React from 'react';

function CardItem({ src, text, path }) {
  console.log('CardItem props:', { src, text, path }); // Log props

  const formattedText = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <li className='cards__item'>
      <a className='cards__item__link' href={path} target='_blank' rel='noopener noreferrer'>
        <figure className='cards__item__pic-wrap'>
          <img src={src} alt='Executive Member' className='cards__item__img' />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{formattedText}</h5>
        </div>
      </a>
    </li>
  );
}

export default CardItem;