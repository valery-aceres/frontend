import React from "react";
import '../css/Contact.css';
// import Footer from '../Footer';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
    const [state, handleSubmit] = useForm('xeqpwqpa');
    if (state.succeeded) {
      return <div style={{width: "100%", margin: "auto", padding: "300px", textAlign:"center", borderRadius: "20px"}}><h1 className="p-2">Thank you for your message! </h1>
      <br/> 
      <div>
      <a href="/" class="btn btn-primary m-auto">Go back to Home</a>
      </div>
      </div>;
      
  }
  return (
      <div>
        <div class="carousel slide" data-ride="carousel" style={{width:"60%", margin:"auto", marginTop:"50px"}}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./images/contact.png" alt="Contact"/>
          </div>
        </div>
        </div>
  
      {/* <h1 className="p-4">Get in Touch!</h1> */}
      <p style={{width:"60%", margin:"auto", marginTop:"30px"}}>We're happy to answer questions. We will do our best to respond to you within 24 hours, sometimes a bit longer on weekends. Before submitting the form, please check our <a href="url">FAQ section</a>, you might find an answer to your question there.</p>
      <div className="container" style={{width:"60%", margin:"auto", marginTop:"30px"}}>
        <form onSubmit={handleSubmit} id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xeqpwqpa" method="post">
          <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label>
            <input style={{borderRadius:"20px"}}type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
            <ValidationError field="name" prefix="Name" errors={state.errors} />
            <label for="email-address">Email Address</label>
            <input style={{borderRadius:"20px"}} type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
            <ValidationError field="email" prefix="Email" errors={state.errors} />
            <label for="message">Message</label>
            <textarea style={{borderRadius:"20px"}} type="text" rows="5" name="message" id="message" placeholder="Your message" required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
            <ValidationError field="message" prefix="Message" errors={state.errors} />
          </fieldset>
          <br/>
          <button style={{borderRadius:"20px"}} className="btn btn-primary" type="submit" disabled={state.submitting}>Submit</button>
        </form>
        
        
      </div>
        <br/>
        {/* <div><Footer /></div> */}
      </div>
  );
};

export default Contact;