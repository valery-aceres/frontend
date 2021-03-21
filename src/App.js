import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import TermsAndConditions from './components/pages/TermsAndConditions';
import ReturnPolicy from './components/pages/ReturnPolicy';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import About from './components/pages/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/termsandconditions' component={TermsAndConditions} />
          <Route path='/returnpolicy' component={ReturnPolicy} />
          <Route path='/privacypolicy' component={PrivacyPolicy} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
