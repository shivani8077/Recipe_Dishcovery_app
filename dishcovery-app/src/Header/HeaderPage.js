import React from "react";
import './HeaderPage.css';
import logo from '../Images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderPage() {
    return (
        <header className="Header">
            {/* Logo */}
            <img src={logo} alt="logo" className="logo"/>       
            {/* menu option or navbar */}
            <nav>
                <a href="/">Home</a>
                <a href="/add-recipe">Add-Recipe</a>
                <a href="/category">Category</a>
                <a href="/about">About</a>
                <a href="/contact-us">Contact Us</a>
            </nav>
            {/* search bar */}
            {/* <input type="text" placeholder="search..." className="search" name="search" /> */}
        </header>
    );
}

export default HeaderPage;