import React from 'react';
import '../InformationPage.css';
import Footer from '../Footer';



export default function About() {
  return (
    <>
    <h1>Track your order</h1>
    <div>
        <form className = "form">
        <label>
            Order Number/Email Address:
            <input type="text" placeholder="enter your information" />
        </label>
        <button>Submit</button> 
        </form>
    </div>
    <Footer />
  </>
    );
}
