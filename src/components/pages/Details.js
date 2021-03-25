import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import List from './List'
import '../css/Details.css'
import Carousel from 'nuka-carousel';

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
                            <Carousel style={{width: "50%"}}>
                                <img src={item.src} alt="Iphone Banner"/>

                                <img src={item.src2} alt="Samsung Banner" />
                                
                                <img src={item.src3} alt="Huawei Banner"/>
                            </Carousel>
                            {/* <div className="product_image">
                                
                            <img src={item.src}/>
                            </div> */}

                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <h3>{item.brand}</h3>
                                    <span>AED {item.price}</span>
                                </div>
                                
                                <p><b>Available colors</b></p>
                                <Colors colors={item.colors}/>
                                <p><b>Item Specifications</b></p>
                                <ul style={{listStyleType: "none", marginBottom:"30px", padding:"0"}}>
                                <li>OS: {item.os}</li>
                                <li>Brand: {item.brand}</li>
                                <li>RAM: {item.ram}</li>
                                <li>Product Dimensions: {item.dimension}</li>
                                <li>Item weight: {item.weight}</li>
                                <li>What's in the box: {item.box}</li>
                                </ul>
                                <p><b>About this item</b></p>
                                <List list={item.description}/>
                                <br/>
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
