import React, { Component } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Details from './pages/Details'
import {Route} from "react-router-dom"
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import PaymentForm from './pages/PaymentForm'
import Signin from './pages/SignIn'
import SignUp from './pages/SignUp'
// Footer Links
import About from './pages/About'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ShippingAndDelivery from './pages/ShippingAndDelivery'
import ReturnPolicy from './pages/ReturnPolicy'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
// import ProductSupport from './pages/ProductSupport'
import OrderSupport from './pages/OrderSupport'
import Location from './pages/Location'
// import Signup from './pages/Signup'
// Product listing 
import ProductCreation from './pages/ProductCreation'

export class Section extends Component {
    render() {
        return (
            
            <section>
                    <Route path="/" component={Home} exact />
                    <Route path="/products" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/checkout" component={Checkout} exact />
                    <Route path="/signin" component={Signin} exact />
                    <Route path="/signup" component={SignUp} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/termsandconditions" component={TermsAndConditions} exact />
                    <Route path="/privacypolicy" component={PrivacyPolicy} exact />
                    <Route path="/shippinganddelivery" component={ShippingAndDelivery} exact /> 
                    <Route path="/returnpolicy" component={ReturnPolicy} exact /> 
                    <Route path="/faq" component={Faq} exact /> 
                    <Route path="/contact" component={Contact} exact /> 
                    {/* <Route path="/productsupport" component={ProductSupport} exact />  */}
                    <Route path="/ordersupport" component={OrderSupport} exact /> 
                    <Route path="/location" component={Location} exact /> 
                    {/* Product Listing */}
                    <Route path="/productcreation" component={ProductCreation} exact /> 

            </section>
        )
    }
}

export default Section
