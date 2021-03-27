import React, { Component } from 'react';
import Faq from 'react-faq-component';
// import Footer from '../Footer';
import ChatBot from '../ChatBot';
// import '../css/InformationPage.css';

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "When will my order ship?",
      content: "Orders typically ship from our Dubai facility within 24 hours from being placed. Orders placed during weekends or holidays will ship on the following business day."
    },
    {
      title: "Which shipping providers do you offer?",
      content: "By default, all orders placed with Indigo Eagles will ship via Aramex unless otherwise specified. Fedex,UPS, DHL, Freight Forwarding and Trucking services are available upon request. Please ask you account manager for complete details."
    },
    {
      title: "How much does shipping cost?",
      content: "Shipping costs vary depending on the shipping method you select, the total weight and size of your order and your destination address. For your convenience, a shipping cost estimate is provided in your shopping cart for all available shipping methods prior to check out."
    },
    {
      title: "How long will it take for me to receive my order?",
      content: "When checking out, you will have the option of selecting the shipping method for your order. Please check our shipping and delivery page for more information."
    },
    {
      title: "Do you ship internationally?",
      content: "Yes, we ship to over 200 countries"
    },
    {
      title: "Where's my tracking number? How do I track my order?",
      content: 'Once your order ships, an invoice with a tracking number(s) will be emailed to you and will also be available to you on-line within the "My Orders" section of your account. You can track the status of your order on-line by clicking the "Track My Order" link that is available within the order information of every order you place.'
    },
    {
      title: "What is your return policy?",
      content: "Unopened products can be returned for a refund and/or exchange within 14 days of delivery. Please note that shipping charges are not refundable."
    },
    {
      title: "How long will it take to process my exchange/return?",
      content: "Exchanges are processed and shipped within 5 business days from receipt to our facility. Please note that exchanges are subject to the shipping charges incurred to and from our warehouse. You will receive the refund within 2 - 5 working days."
    },
    {
      title: "What payment methods do you accept?",
      content: "We accept Visa, MasterCard, Discover, American Express, PayPal and Behalf financing."
    }],
    style: {
        // bgColor: 'white',
      titleTextColor: 'blue',
      titleTextSize: '48px',
      rowTitleColor: 'blue',
      rowTitleTextSize: 'medium',
      // margin: "400px",
      // rowContentColor: 'grey',
      rowContentTextSize: '16px',
      rowContentPaddingTop: '10px',
      rowContentPaddingBottom: '50px',
      rowContentPaddingLeft: '50px',
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="m-5">
        <Faq data={data}/>
        </div>
        <ChatBot />
      </div>
      
    )
  }
}