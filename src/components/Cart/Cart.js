import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce( (total, prd) => total + prd.price ,0);

    let shipping = 0;
    if (totalPrice > 150) {
        shipping = 1.99;
    } 
    else if (totalPrice > 40) {
        shipping = 5;
    }
    else if (totalPrice > 15) {
        shipping = 10;
    }
    else if(totalPrice > 1) {
        shipping = 12;
    }  

    const tax = totalPrice / 10;

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <table className="cal-table">
                <tbody>
                    <tr>
                        <td>Items:</td><td> {cart.length}</td>
                    </tr>
                    <tr>
                    <td>Price:</td><td> ${(totalPrice).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Tax + Vat:</td><td> ${(tax).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping cost:</td><td> ${shipping}</td>
                    </tr>
                </tbody>
            </table>
            <table className="gr-total">
                <tbody>
                    <tr>
                        <td>Grand Total:</td><td> ${(totalPrice + tax + shipping).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default Cart;