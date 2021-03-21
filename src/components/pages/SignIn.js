import React from 'react';
import '../../App.css';
import Footer from '../Footer';


export default function SignIn() {
  return (
    <>
    <div className ="container">
        <form className = "form">
        <label>
            Email:
            <input type="text" placeholder="email" />
        </label>
        <label>
            Password:
            <input type="text" placeholder="password" />
        </label>
        <button>Submit</button> 
  
        <p>Forgot <a href="#">password</a>?</p>
        <br/>
        <p className="message">Not Registered yet? Click <a href="/sign-up">Register Now!</a>?</p>
        </form>
        
    </div>
    <Footer />
  </>
    );
}


