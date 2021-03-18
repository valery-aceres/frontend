import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProductCards() {
  return (
    <div className='cards'>
      <h1>All Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />
            <CardItem
              src='images/samsung.jpg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />
            <CardItem
              src='images/samsung.jpg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />
            <CardItem
              src='images/samsung.jpg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />
            <CardItem
              src='images/samsung.jpg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default ProductCards;
