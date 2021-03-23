import React from 'react';
import './css/SignUp.css';


function form() {
  return (
      
      <div>
        
        <form className = "form">
        <label>
            First Name:
            <input type="text" placeholder="first name" />
        </label>
        <label>
            Last Name:
            <input type="text" placeholder="last name" />
        </label>
        <label>
            Email:
            <input type="text" placeholder="email" />
        </label>
        <label>
            Password:
            <input type="text" placeholder="password" />
        </label>
        <label>
            Confirm Password:
            <input type="text" placeholder="retype password" />
        </label>
        <button>Submit</button>
        </form>
    </div>
    
  );
}

export default form;
