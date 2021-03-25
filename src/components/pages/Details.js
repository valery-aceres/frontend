import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import List from './List'
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src}/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <h2>{item.brand}</h2>
                                    <span>AED {item.price}</span>
                                </div>
                                <p>Available colors</p>
                                <Colors colors={item.colors}/>
                                <p><b>About this item</b></p>
                                <List list={item.description}/>
                                <p><b>Item Specifications</b></p>
                                <p>OS: {item.os}</p>
                                <p>Brand: {item.brand}</p>
                                <p>RAM: {item.ram}</p>
                                <p>Product Dimensions: {item.dimension}</p>
                                <p>Item weight: {item.weight}</p>
                                <p>What's in the box: {item.box}</p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
