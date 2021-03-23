import React from 'react';
import './css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe now to receive updates on our new products
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>About</Link>
            <Link to='/termsandconditions'>Terms and Conditions</Link>
            <Link to='/privacypolicy'>Privacy Policy</Link>
          </div>
          <div class='footer-link-items'>
          <h2>Orders</h2>
            <Link to='/account'>My Account</Link>
            <Link to='/shippinganddelivery'>Shipping and Delivery</Link>
            <Link to='/returnpolicy'>Return Policy</Link>
            <Link to='/faq'>FAQs</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2>Contact</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/productsupport'>Product Support</Link>
            <Link to='/ordersupport'>Order Tracking</Link>
            <Link to='/location'>Location</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Brands</h2>
            <Link to='/products'>Iphone</Link>
            <Link to='/products'>Samsung</Link>
            <Link to='/products'>Huawei</Link>
            <Link to='/products'>Oppo</Link>
            <Link to='/products'>Nokia</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Indigo Eagles
              <i class='fab fa-phoenix-framework' />
            </Link>
          </div>
          <small class='website-rights'>Indigo Eagles © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
