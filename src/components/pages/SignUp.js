import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Form from '../Form';

export default function SignUp() {
  return (
    <>
    <h1 class="message">Already Registered? <a href="/sign-in">Signin</a></h1>
    <Form />
    <Footer />
  </>
    );
}



