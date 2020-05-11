import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>


      <Footer></Footer>
    </div>
  );
}

export default App;
