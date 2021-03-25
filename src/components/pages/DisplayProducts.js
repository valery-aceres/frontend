import React from 'react';
import '../../App.css';
import './Displayproduct.css';
import Footer from '../Footer';
import DisplayProductCards  from '../DisplayProductCards';




export default function DisplayProducts() {
  return (
    <>
      <h1>Product page</h1>
      <DisplayProductCards />
      <Footer />
      
    </>
  );
}
