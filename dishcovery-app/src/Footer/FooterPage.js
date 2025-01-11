import React from "react";
import { Link } from "react-router-dom";
import "./FooterPage.css"; // Import CSS for styling
import logo from '../Images/logo.jpg';

function FooterPage() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-logo">
                    <img src={logo} alt="logo" className="logo-image"/>
                    <h2>DISHCOVERY</h2>
                    <p>Discover delicious recipes every day!</p>
                </div>

                {/* Center Section - Navigation */}
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/add-recipe">Add Recipe</Link>
                    <Link to="/category">Categories</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Right Section - Social Media */}
                <div className="footer-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© 2025 DISHCOVERY | All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default FooterPage;
