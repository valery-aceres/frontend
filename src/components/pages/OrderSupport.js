import React from 'react';
import '../css/InformationPage.css';
// import Footer from '../Footer';



export default function About() {
  return (
    <>
    <h1>Track your order!</h1>
    <div>
        <form className="p-5 text-center">
        <label>
           <b className="text-center m-2">Order Number/Email Address: </b>
        </label>
        <input className="p-1"type="text" placeholder="Enter your information" style={{borderRadius:"20px", marginRight:"10px", marginBottom:"10px", width: "50%", height:"50px"}}/>
        <button className="btn btn-primary" style={{borderRadius:"20px", height:"50px", maxWidth:"50%"}}>Submit</button> 
        </form>
    </div>
    {/* <Footer /> */}
  </>
    );
} 
