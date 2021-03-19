import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Form from '../Form';

export default function SignIn() {
  return (
    <>
    <div>
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
        <p>Not Registered yet? Click <a href="/sign-up">Register Now!</a>?</p>
        </form>
        
    </div>
    <Footer />
  </>
    );
}
