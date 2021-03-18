import React from 'react';
import './SignUp.css';


function form() {
  return (
      
      <div className="login-page">
        
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
            New Password:
            <input type="text" placeholder="password" />
        </label>
        <label>
            Retype Password:
            <input type="text" placeholder="retype password" />
        </label>
        <button>Submit</button>
        </form>
        <h1 class="message">Already Registered? <a href="#">Login</a></h1>
        <br/>
    </div>
    
  );
}

export default form;
