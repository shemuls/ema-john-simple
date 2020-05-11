import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.products;
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="prouct-content">
                <h4>{name}</h4>
                <div className="cont">
                    <div className="info">
                        <p>By: {seller}</p>
                        <p className="price">${price}</p>
                        <p className="qnty">only {stock} left in stock - order soon</p>
                        <button className="add-cart-btn" onClick={() => props.handleAddProduct(props.products)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </button>
                    </div>
                    <div className="review">
                        <h5>Review</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;