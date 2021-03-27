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
              src='https://techonthego.co.uk/wp-content/uploads/2020/10/new-iphone-12-featured.png'
              text="Life is easier with on iPhone"
              label='APPLE'
              path='/products'
            />
          </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://i.ytimg.com/vi/PwNqrrFsprM/maxresdefault.jpg'
              text='Do bigger things with Samsung'
              label='SAMSUNG'
              path='/products'
            />
          </ul>
          </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://www.alhaddadshop.com/Content/Nova3i/sa-en-nova3i/img/nova3i_herobanner_mobile.jpg'
              text="Connecting the Future"
              label='HUAWEI'
              path='/products'
            />
            </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://9to5google.com/wp-content/uploads/sites/4/2016/10/pixel-cw-1.png?w=1000'
              text="Make GOOGLE do it!"
              label='GOOGLE'
              path='/products'
            />
            </ul>
        </div>

          <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://us.v-cdn.net/6031042/uploads/editor/2o/7y6q77m00c32.png'
              text='Connecting People'
              label='NOKIA'
              path='/products'
            />
          </ul>
          
        </div>
        <div className='col-12 col-md-6 col-lg-4'> {/*//formerly 'cards__wrapper'*/}
          <ul className='card-body'> {/*//formerly 'cards__items'  */}
            <CardItem
              src='https://i.gadgets360cdn.com/large/oppoa92020_main_1568105220106.jpg'
              text='Capture the real you'
              label='OPPO'
              path='/products'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
