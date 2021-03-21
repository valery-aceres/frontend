// import React from 'react';
// import '../App.css';
// import './HeroSection.css';

// function ProductHero() {
//   return (
//     <div className='hero-container'>
//       <img src='/images/iphonebanner.jpg'/>
//     </div>
//   );
// }

import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <img src="/images/iphonebanner.jpg" alt="Iphone Banner"/>

        <img src="/images/samsungbanner.jpg" alt="Samsung Banner" />
        
        <img src="/images/huaweibanner.jpg" alt="Huawei Banner"/>
      </Carousel>
    );
  }
}



