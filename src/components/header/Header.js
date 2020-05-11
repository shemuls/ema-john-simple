import React from 'react';
import './Header.css';
import emalogo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={emalogo} alt=""/>
            </div>
            <nav>
                <div className="container">
                    <ul>
                        <li><a href="/shop ">Shop</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="/inventory">Manage Inventory</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;