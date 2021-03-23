import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import About from './components/pages/About';
import TermsAndConditions from './components/pages/TermsAndConditions';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
// import ProductSupport from './components/pages/ProductSupport';
import OrderSupport from './components/pages/OrderSupport';
import Location from './components/pages/Location';
import ShippingAndDelivery from './components/pages/ShippingAndDelivery';
import ReturnPolicy from './components/pages/ReturnPolicy';
import Faq from './components/pages/Faq';


import { FormspreeProvider } from "@formspree/react";


function App() {
  return (
    
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/about' component={About} />
          <Route path='/privacypolicy' component={PrivacyPolicy} />
          <Route path='/termsandconditions' component={TermsAndConditions} />
          {/* <Route path='/productsupport' component={ProductSupport} /> */}
          <Route path='/ordersupport' component={OrderSupport} />
          <Route path='/location' component={Location} />
          <Route path='/shippinganddelivery' component={ShippingAndDelivery} />
          <Route path='/returnpolicy' component={ReturnPolicy} />
          <Route path='/faq' component={Faq} />
          
          
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
