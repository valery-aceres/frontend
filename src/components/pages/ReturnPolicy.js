import React from 'react';
import '../InformationPage.css';
import Footer from '../Footer';


export default function ReturnPolicy() {
  return (
    <>
    <h1 class="message">Refunds and Return Policy</h1>
    <h5>Order cancellation</h5>
    <p>
    All orders can be canceled until they are shipped. If your order has been paid and you need to change or cancel it, please contact us within 12 hours.</p>
    <h5>Refunds</h5>
    <p>
    Your satisfaction is our #1 priority. We want you to shop with confidence. That’s why we proudly offer an absolute satisfaction guarantees that ensure you’ll receive your item on time and as described.
    </p>
    <p>
    Your satisfaction is our #1 priority. We want you to shop with confidence. That’s why we proudly offer an absolute satisfaction guarantees that ensure you’ll receive your item on time and as described.
    </p>
    <ul className="list">
    <li className="list">Full refund if you don’t receive your order;</li>
    <li className="list">Full refund if your order does not arrive within the guaranteed time(3-5 working days);</li>
    </ul>
    <p>
    Full refunds are not available under the following circumstances:
    </p>
    <ul className="list">
    <li className="list">Your order does not arrive due to factors within your control (e.g. providing the wrong shipping address).</li>
    <li className="list">Your order does not arrive due to exceptional circumstances outside our control (e.g. not cleared by customs, delayed by a natural disaster).</li>
    </ul>
    <p>
    All products are 14-day money back guarantee. Just send us a message on v page or contact us at support@indigoeagles.com and we will refund the purchase price.
    </p>
    <h5>Easy Returns</h5>
    <p>
    All products are backed with 14-day money back guarantee. Just <a href="/contact"> contact us</a> and we will refund the purchase price.
    </p>
    <p>
    We stand behind everything we sell. If you are not satisfied with your purchase, you can return it for a replacement or refund. No questions asked! You only should return it at your expense.
    </p>
    <p>
    Please <a href="/contact"> contact us</a> first and we will guide you through the steps. We are always ready to give you the best solutions!
    </p>
    <p>
    Please do not send your purchase back to us unless we authorize you to do so.
    </p>

    <Footer />
  </>
    );
}

