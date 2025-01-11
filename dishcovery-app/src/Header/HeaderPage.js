import React from "react";
import './HeaderPage.css';
import logo from '../Images/logo.jpg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderPage() {
    return (
        <header className="Header">
            {/* Logo */}
            <img src={logo} alt="App Logo" className="logo" />
            {/* menu option or navbar */}
            <nav>
                <a href="/">Home</a>
                <a href="/add-recipe">Add-Recipe</a>
                <a href="/category">Category</a>
                <a href="/about">About</a>
                <a href="/contactus">Contact Us</a>
                {/* <button>Log In</button> */}
            </nav>
            {/* search bar */}
            {/* <input type="text" placeholder="search..." className="search" name="search" /> */}
        </header>
    );
}

export default HeaderPage;