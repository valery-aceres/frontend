import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import Colors from './Colors'
import Footer from "../Footer.js"

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
          <div>
            <h1 className="text-center p-2">All Products</h1>
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
                               <button onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
               
            </div>
          </div>
        )
    }
}

export default Products
