import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ProductHero from '../ProductHero';

function Home() {
  return (
    <>
      <HeroSection />
      <ProductHero />
      <Cards />
    </>
  );
}

export default Home;