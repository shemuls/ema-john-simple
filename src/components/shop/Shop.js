import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart]   =   useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="container shop">
            <div className="product-container">
                    {
                        products.map(prd => <Product products={prd} handleAddProduct = {handleAddProduct}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;