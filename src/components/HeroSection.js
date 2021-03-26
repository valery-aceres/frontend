import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button';
import './css/HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/phone.mp4' autoPlay loop muted />
      <h1 className="mx-auto text-center mt-1">QUALITY AT THE BEST PRICE</h1>
      <p className="mx-auto text-center mt-1">What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Sign In
        </Button> 
        <Button2
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SHOP NOW <i className='far fa-arrow-alt-circle-right' />
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;
