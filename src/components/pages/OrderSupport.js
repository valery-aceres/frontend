import React from 'react';
import '../css/InformationPage.css';
// import Footer from '../Footer';



export default function About() {
  return (
    <div style={{paddingTop:"200px", paddingBottom:"200px"}}>
      <div class="fa-3x">
      <h1>Track your order! <i className="fas fa-sync fa-spin"style={{color:"limegreen"}}></i></h1>
      </div>
      <div>
          <form className="text-center">
          <h2>
            Order Number/Email Address: 
          </h2>
          <input className="p-1" type="text" placeholder="Enter your information" style={{borderRadius:"20px", marginRight:"10px", marginBottom:"10px", width: "50%", height:"50px"}}/>
          <button className="btn btn-primary" style={{backgroundColor:"limegreen",borderRadius:"20px", height:"50px", maxWidth:"50%"}}>Submit</button> 
          </form>
      </div>
  </div>
    );
} 
