import React from 'react';
import Navbar from './Ricky/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import CardSlider from './Ricky/CardSlider';
import "./Ricky/Style.css"
import ShoppingCard from './Ricky/ShopingCard';
import Logo from './Ricky/Logo';
import Service from './Ricky/Service';
import Footer from './Ricky/Footer';
function App() {
  return (
    <>
<Navbar/>

<CardSlider/>
<ShoppingCard/>
<Logo/>
<Service/>
<Footer/>
    </>
  );
}

export default App;
