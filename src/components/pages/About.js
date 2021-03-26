import React from 'react';
import '../css/InformationPage.css';




export default function About() {
  return (
    <>
    <div>
    <div class="carousel slide" data-ride="carousel" style={{width:"80%", margin:"auto", marginTop:"50px"}}>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="./images/about.png" alt="Contact"/>
        </div>
      </div>
    </div>
    <h1>OUR Team</h1>
    <div className="row mb-5">
      <div class="card col" style={{width: "50%", padding:"0"}}>
        <img class="card-img-top" src="./images/val.jpg" alt="Valery"/>
          <div class="card-body">
            <p class="card-text">Valery Aceres</p>
          </div>
      </div>
      <div class="card col" style={{width: "50%",padding:"0" }}>
        <img class="card-img-top" src="./images/seyi.jpg" alt="Seyi"/>
          <div class="card-body">
            <p class="card-text">Seyi Akinyemi</p>
          </div>
      </div>
    </div>
    </div>
  </>
    );
}
