import React from 'react';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active click" href="#"><i class="fa fa-bars"></i></a>
            <a className="nav-item nav-link active" href="#">Amazon miniTV</a>
            <a className="nav-item nav-link active" href="#">Sell</a>
            <a className="nav-item nav-link active" href="#">Best Seller</a>
            <a className="nav-item nav-link active" href="#">Mobiles</a>
            <a className="nav-item nav-link active" href="#">Today's Deal</a>
            <a className="nav-item nav-link active" href="#">Customers Services</a>
            <a className="nav-item nav-link active" href="#">Electronics</a>
            <a className="nav-item nav-link active" href="#">New Realeses</a>
            <a className="nav-item nav-link active" href="#">Prime</a>
            <a className="nav-item nav-link active" href="#">Home & Kitchen</a>
            <a className="nav-item nav-link active" href="#">Amazon Pay</a>
            <img src='./image/sale.jpg' className="ml-5"/>
           
          
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;