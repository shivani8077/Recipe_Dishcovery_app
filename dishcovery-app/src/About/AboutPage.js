import React from "react";
import './AboutPage.css';
import HeaderPage from "../Header/HeaderPage";
import { FaCircle } from "react-icons/fa6";


function AboutPage() {
    return (
        <div>
            <HeaderPage />
            <div className="about-card">
                <h1>About DISHCOVERY</h1>
                <p className="p1">Welcome to Dishcovery, your ultimate destination for exploring and discovering
                    delicious recipes from around the world! Whether you're a seasoned chef or
                    a beginner in the kitchen, Dishcovery is here to inspire and
                    guide you through your culinary journey.</p>
                <br />
                <h1>Our Mission</h1>
                <p className="p1">At Dishcovery, we believe that cooking is more than just preparing food—it's
                    an experience, a way to bring people together, and an art that connects cultures.
                    Our mission is to provide easy-to-follow, mouthwatering recipes that cater to
                    every taste and dietary preference.</p>
                <br />
                <h1>What We Offer</h1>
                <p className="p1">
                    <FaCircle className="icon" size={8}/> A diverse collection of recipes, from traditional dishes to modern twists<br/>
                    <FaCircle className="icon" size={8}/> Step-by-step instructions to make cooking fun and easy<br/>
                    <FaCircle className="icon" size={8}/> Healthy and budget-friendly meal options<br/>
                    <FaCircle className="icon" size={8}/> A community-driven platform where food lovers can share their recipes and experiences</p>
            </div>
        </div>
    );
}

export default AboutPage;