import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <div><div><h2 className="p-5" style={{textAlign:"center"}}>No items in your cart</h2></div><div className="text-center"><img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3899203.jpg"/><div><button className="btn btn-primary mb-4">Go Shopping</button></div></div></div>
        }else{
            return (
                <>
                    <h1 className="p-4">Shopping Cart</h1>
                    {
                        
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img style={{margin:"20px"}} src={item.src} alt=""/>
                                <div className="box" >
                                    <div className="row" style={{marginTop:"100px"}} >
                                        <h2>{item.brand}</h2>
                                        <span>AED {item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors}/>
                                    <ul style={{listStyleType: "none", marginBottom:"30px", padding:"0"}}>
                                        <li>OS: {item.os}</li>
                                        <li>Brand: {item.brand}</li>
                                        <li>RAM: {item.ram}</li>
                                        <li>Product Dimensions: {item.dimension}</li>
                                        <li>Item weight: {item.weight}</li>
                                        <li>What's in the box: {item.box}</li>
                                    </ul>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Checkout</Link>
                        <h3>Total: AED{total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
