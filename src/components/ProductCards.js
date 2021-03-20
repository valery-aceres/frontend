import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProductCards() {
  return (
    <div className='container my-4'> {/*//formerly 'cards'  */}
      <h1>All Products!</h1>
      <div className='row' > {/*//formerly 'cards__container'  */}
        <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'  card mb-4 m-auto  */}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />
      
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            
            <CardItem
              src='images/samsung.jpg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
              
            />
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/samsung.jpg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />

          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/samsung.jpg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/iphone.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
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
