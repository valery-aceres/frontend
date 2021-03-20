import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'> 
      <h1>Check out Featured Products!</h1>
      <div className='row' > {/*//formerly 'cards__container'  */}
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
              src='images/huawei.jpg'
              text="Huawei Mate X"
              label='HUAWEI'
              path='/products'
            />
            </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/google.jpg'
              text='Google Pixel 6'
              label='GOOGLE'
              path='/products'
            />
            </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='images/nokia.jpg'
              text='Nokia 5.4'
              label='NOKIA'
              path='/products'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
