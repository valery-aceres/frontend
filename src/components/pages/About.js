import React from 'react';
import '../css/InformationPage.css';


export default function About() {
  return (
    <div id="bgColor">
      <div class="carousel slide" data-ride="carousel" style={{width:"80%", margin:"auto"}}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{marginTop:"50px", marginBottom:'50px'}}class="d-block w-100" src="./images/about.png" alt="Contact"/>
          </div>
        </div>
      </div>
  </div>
    );
}
