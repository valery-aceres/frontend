import React from 'react';
import './SignUp.css';


function form() {
  return (
      
      <div className="login-page">
        
        <form className = "form">
        <label>
            Full Name:
            <input type="text" placeholder="Your name" />
        </label>
        <label>
            Email:
            <input type="text" placeholder="Your email address" />
        </label>
        <label>
            Message:
            <textarea rows="8" type="text" placeholder="Message" />
        </label>
        <button>Submit</button>
        </form>

    </div>
    
  );
}

export default form;