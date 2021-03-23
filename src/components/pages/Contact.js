import React from "react";
import '../css/Contact.css';
import Footer from '../Footer';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
  const [state, handleSubmit] = useForm('xeqpwqpa');
  if (state.succeeded) {
    return <div>Thank you for your message! 
    <br/>
    <div>
    <a href="/" class="btn btn-primary">Go back to home</a>
    </div>
    <br/>
    <Footer />
    </div>;
    
  }
  return (
    <div>
    <h1>Get in Touch!</h1>
    <p>Before submitting the form, please check our <a href="url">FAQ section</a>, you might find an answer to your question there.</p>
    <div className="container" style={{maxWidth: '600px'}}>
      <form onSubmit={handleSubmit} id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqpwqpa" method="post">
        <fieldset id="fs-frm-inputs">
          <label for="full-name">Full Name</label>
          <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
          <ValidationError field="name" prefix="Name" errors={state.errors} />
          <label for="email-address">Email Address</label>
          <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <label for="message">Message</label>
          <textarea type="text" rows="5" name="message" id="message" placeholder="Your message" required=""></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </fieldset>
        <br/>
        <button  className="btn btn-primary" type="submit" disabled={state.submitting}>Submit</button>
      </form>
      
      
    </div>
      <br/>
      <div><Footer /></div>
    </div>
  );
};

export default Contact;