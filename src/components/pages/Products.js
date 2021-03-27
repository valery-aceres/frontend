import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import Carousel from 'nuka-carousel';



export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div>
            <div style={{height:"10%"}}>
            <Carousel>
                <img src="./images/banner.png" alt="Brands"/>

                <img src="./images/about.png" alt="About" />
                
                <img src="./images/contact.png" alt="Contact"/>
            </Carousel>
            </div>
          <div>
            
            <h1 className="text-center p-5">All Products</h1>
            <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product._id}`}>{product.title}</Link>
                               </h3>
                               <p className="m-0 text-muted "><i><s>Before: AED {product.discount}</s></i></p>
                               <span>Now: AED {product.price}</span>
                               <p> {product.brand}</p>

                                </div>
                               <button onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                   ))
               }
               
            </div>
          </div>
          </div>
        )
    }
}

export default Products
