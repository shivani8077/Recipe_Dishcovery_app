import React from "react";
import './CategoryPage.css';
import HeaderPage from "../Header/HeaderPage";
import { Link } from "react-router-dom";
import burger from '../Images/burger.jpg';

function CategoryPage() {
    const categories = [
        { name: 'Breakfast', path: '/category/breakfast', image: burger },
        { name: 'Launch', path: '/category/lunch', image: burger },
        { name: 'Dinner', path: '/category/dinner', image: burger },
        { name: 'Dessert', path: '/category/dessert', image: burger },
    ];

    return (
        <div>
            <HeaderPage />
            {/* Heading title */}
            <div className="card-container">
                <h3>Select the Food Categories</h3>
            </div>
            {/* Category Card */}
            <div className="category-card">
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
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryPage;