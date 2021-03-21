import React from 'react';
import '../InformationPage.css';
import Footer from '../Footer';


export default function ShippingAndDelivery() {
  return (
    <>
    <h1>Shipping and Delivery</h1>
    <h5>Worldwide Shipping</h5>
    <p>We are proud to offer international shipping services. However, there are some locations we are unable to ship to. If you happen to be from one of those countries we will contact you.</p>
    <h5>Customs</h5>
    <p>We are not responsible for any custom fees once the items have shipped. By purchasing our products, you consent that one or more packages may be shipped to you and may get custom fees when they arrive to your country.</p>
    <h5>Shipping Time</h5>
    <p>Shipping time varies by location. These are our estimates:</p>
    <table>
        <tr>
            <th>Location</th>
            <th>Estimated Shipping Time</th>
        </tr>
        <tr>
            <td>United States of America</td>
            <td>7 - 10 Business Days</td>
        </tr>
        <tr>
            <td>Canada, Europe</td>
            <td>5 - 7 Business Days</td>
        </tr>
        <tr>
            <td>Australia, New Zealand</td>
            <td>7 - 10 Business Days</td>
        </tr>
        <tr>
            <td>Central and South America</td>
            <td>7 - 10 Business Days</td>
        </tr>
        <tr>
            <td>Asia</td>
            <td>5 - 7 Business Days</td>
        </tr>
        <tr>
            <td>Africa</td>
            <td>5 - 7 Business Days</td>
        </tr>
        <tr>
            <td>Middle East</td>
            <td>2 - 5 Business Days</td>
        </tr>
        </table>
        <h5>Tracking Information</h5>
        <p>You will receive an email with a tracking number once your order is shipped but sometimes due to free shipping tracking is not available. For logistical reasons, items in the same purchase may be sent in separate packages even if you’ve specified combined shipping.</p>
        <p>If you have any other questions, please <a href="/contact"> contact us</a> and we will do our best to help you out.</p>
    <Footer />
  </>
    );
}

