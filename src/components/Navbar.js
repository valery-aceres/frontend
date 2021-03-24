import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './css/Navbar.css';


function Navbar() {
  
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
   
  /* Toggle mobile menu */
  function toggleMenu() {
      if (menu.classList.contains("active")) {
          menu.classList.remove("active");
           
          // adds the menu (hamburger) icon
          toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
      } else {
          menu.classList.add("active");
           
          // adds the close (x) icon
          toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
      }
  }
   


  const items = document.querySelectorAll(".item");
 
  /* Activate Submenu */
  function toggleItem() {
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }
   
  /* Event Listeners */
  for (let item of items) {
      if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
      }   
  }



  /* Close Submenu From Anywhere */
  function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);
 
  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
 










  

  return (
    
      <nav class='navbar-container navbar-dark bg-dark '>
      
      <ul class="menu">
      





        <li class="logo"><a href="#">Indigo Eagles <i class='fab fa-phoenix-framework' /> </a> </li>
        <li class="item">
          <Link to='/' className='nav-links'>
                Home
          </Link>
        </li>
        <li class="item"><a href="#">FAQs</a></li>
        <li class="item has-submenu">
            <a tabindex="0">Brands</a>
            <ul class="submenu">
                <li class="subitem"><a href="#">Apple</a></li>
                <li class="subitem"><a href="#">Samsung</a></li>
                <li class="subitem"><a href="#">Huawei</a></li>
                <li class="subitem"><a href="#">Nokia</a></li>
                <li class="subitem"><a href="#">Google</a></li>
            </ul>
        </li>
        {/*<li class="item has-submenu">
            <a tabindex="0">Plans</a>
            <ul class="submenu">
                <li class="subitem"><a href="#">Freelancer</a></li>
                <li class="subitem"><a href="#">Startup</a></li>
                <li class="subitem"><a href="#">Enterprise</a></li>
            </ul>
         </li>*/}
        <li class="item">
          <Link to='/products' className='nav-links'>
                Products
              </Link>
        </li>
        <li class="item">
          <Link to='/contact' className='nav-links'>
                Contact
          </Link>
        </li>
        <li class="item button">
          <Link to='/sign-in'  className='nav-links-mobile' >
                Log in
          </Link>
        
        </li>
        <li class="item button secondary">
          <Link to='/sign-up'  className='nav-links-mobile'>
                Sign Up
          </Link>
          </li>
        <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
        
  

  
</nav>

     
     
   
  );


/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/* Event listener */
document.addEventListener("click", closeSubmenu, false);

}

export default Navbar;


 
