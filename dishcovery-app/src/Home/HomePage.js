import React from "react";
import './HomePage.css';
import { Link } from "react-router-dom";
import HeaderPage from "../Header/HeaderPage";
import FooterPage from "../Footer/FooterPage";

function HomePage() {
    // const categories = [
    //     { name: "BREAKFAST", path: "/Breakfast", image: omlette },
    //     { name: "LUNCH", path: "/Lunch", image: omlette },
    //     { name: "DINNER", path: "/Dinner", image: omlette },
    //     { name: "DESSERT", path: "/Dessert", image: omlette },
    // ];
    return (
        <div>
            <HeaderPage />
            {/* Title */}
            {/* <div className="title">
                <h1>DISH-COVERY</h1>
            </div> */}
            {/* Category Card */}
            {/* <div className="card-container">
                {categories
                    .filter((category) =>
                        category.name.toLowerCase()
                    )
                    .map((category, index) => (
                        <div key={index} className="card">
                            <img src={category.image} alt={categories.name} className="card-image" />
                            <h4>
                                <Link to={category.path} >{category.name}</Link>
                            </h4>
                        </div>
                    ))}
            </div>  */}
            <br />
            <div className="bg-img">
                <br />
                <div className="search">
                    {/* search bar */}
                    <input type="text" placeholder="search..." className="search" name="search" />
                </div>
                <br />
                <div className="title">
                    <h1 className="heading">Welcome to DISHCOVERY </h1>
                    <p className="para">Discover and share amazing recipes!</p>
                </div>
                {/* Add Recipe Button  */}
                <br />
                <Link to="/add-recipe" className="add-recipe-btn">
                    ➕ Write a New Recipe
                </Link>
            </div>
            <FooterPage />
        </div>
    );
}

export default HomePage;