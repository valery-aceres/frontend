import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/Navbar.css'
import {DataContext} from './Context'
// import './css/Details.css'
// import './css/Cart.css'


export class Navbar extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header className="header-dark bg-dark">
                <div className="menu" onClick={this.menuToggle}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="logo">
                <a href="/">Indigo Eagles <i className='fab fa-phoenix-framework' /> </a> 
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <i className="fas fa-times"></i>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"><sup style={{color:"white", backgroundColor: "grey"}}>{cart.length}</sup></i>              
                        </Link>
                       
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar
