import React, { Component } from 'react';
import Faq from 'react-faq-component';
import Footer from '../Footer';
import '../InformationPage.css';

const data = {
  title: "FAQ",
  rows: [
    {
      title: <h4>When will my order ship?</h4>,
      content: "Orders typically ship from our Dubai facility within 24 hours from being placed. Orders placed during weekends or holidays will ship on the following business day."
    },
    {
      title: <h4>Which shipping providers do you offer?</h4>,
      content: "By default, all orders placed with Indigo Eagles will ship via Aramex unless otherwise specified. Fedex,UPS, DHL, Freight Forwarding and Trucking services are available upon request. Please ask you account manager for complete details."
    },
    {
      title: <h4>How much does shipping cost?</h4>,
      content: "Shipping costs vary depending on the shipping method you select, the total weight and size of your order and your destination address. For your convenience, a shipping cost estimate is provided in your shopping cart for all available shipping methods prior to check out."
    },
    {
      title: <h4>How long will it take for me to receive my order?</h4>,
      content: "When checking out, you will have the option of selecting the shipping method for your order. Please check our shipping and delivery page for more information."
    },
    {
      title: <h4>Do you ship internationally?</h4>,
      content: "Yes, we ship to over 200 countries"
    },
    {
      title: <h4>Where's my tracking number? How do I track my order?</h4>,
      content: 'Once your order ships, an invoice with a tracking number(s) will be emailed to you and will also be available to you on-line within the "My Orders" section of your account. You can track the status of your order on-line by clicking the "Track My Order" link that is available within the order information of every order you place.'
    },
    {
      title: <h4>What is your return policy?</h4>,
      content: "Unopened products can be returned for a refund and/or exchange within 14 days of delivery. Please note that shipping charges are not refundable."
    },
    {
      title: <h4>How long will it take to process my exchange/return?</h4>,
      content: "Exchanges are processed and shipped within 5 business days from receipt to our facility. Please note that exchanges are subject to the shipping charges incurred to and from our warehouse. You will receive the refund within 2 - 5 working days."
    },
    {
      title: <h4>What payment methods do you accept?</h4>,
      content: "We accept Visa, MasterCard, Discover, American Express, PayPal and Behalf financing."
    }],
    style: {
        // bgColor: 'white',
      titleTextColor: 'blue',
      titleTextSize: '48px',
      rowTitleColor: 'blue',
      rowTitleTextSize: 'medium',
      margin: "400px",
      // rowContentColor: 'grey',
      rowContentTextSize: '16px',
      // rowContentPaddingTop: '10px',
      rowContentPaddingBottom: '10px',
      rowContentPaddingLeft: '50px',
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq data={data}/>
        <Footer />
      </div>
      
    )
  }
}