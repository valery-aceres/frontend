import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'> 
      <h1 className="mx-auto text-center mt-1">Check out Featured Products!</h1>
      <div className='row' > {/*//formerly 'cards__container'  */}
        <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://goodmockups.com/wp-content/uploads/2018/09/Free-iPhone-Xs-Xs-Max-Mockup-PSD-Set.jpg'
              text="Iphone 12"
              label='APPLE'
              path='/products'
            />
          </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://4.img-dpreview.com/files/p/articles/7781318523/Samsung_S20_Lineup_2.jpeg'
              text='Samsung S20'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://i.pinimg.com/originals/7d/b5/ea/7db5ea88428f9c7b6b2a1fc781f5706a.png'
              text="Huawei Mate X"
              label='HUAWEI'
              path='/products'
            />
            </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://shop.ee.co.uk/content/dam/everything-everywhere/images/HuaweiP40Pro/Huawei_Hub_P40_LargePromo_1156x648.jpg.eeimg.640.360.high.jpg/1588156403045.jpg'
              text='Google Pixel 6'
              label='GOOGLE'
              path='/products'
            />
            </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://www.metrobyt-mobile.com/content/dam/mpcs/phones/190198790392/learn_tab/iphoneXsMax-hero-banner_mobile.jpg'
              text='Nokia 5.4'
              label='NOKIA'
              path='/products'
            />
          </ul>
          
        </div>
        <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://digitalmore.co/wp-content/uploads/2018/07/Find-X-KV.jpg'
              text='Google Pixel 6'
              label='GOOGLE'
              path='/products'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
