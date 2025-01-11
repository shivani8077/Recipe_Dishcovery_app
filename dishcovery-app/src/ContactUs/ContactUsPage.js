import React from "react";
import './ContactUsPage.css';
import HeaderPage from "../Header/HeaderPage";

function ContactUsPage() {
    return (
        <div>
            <HeaderPage />
            <div className="contactus">
                <h1>📞 Contact Us - Dishcovery</h1>
                <p className="p1">We’d love to hear from you! Whether you have questions, feedback, or suggestions,
                    feel free to reach out to us. Your input helps us improve and bring you the best
                    culinary experience.
                </p>
                <br />
                    <h1>Get in Touch</h1>
                    <p> 📧 Email: support@dishcovery.com<br />
                        📞 Phone: +91 98765 43210<br />
                        📍 Address: 123, Food Street, Bulandshahr, India
                    </p>
                    <br />
                    <h1>📲 Follow Us on Social Media</h1>
                    <p> 🌐 Instagram: @dishcovery<br />
                        🌐 Facebook: Dishcovery Official<br />
                        🌐 Twitter (X): @dishcovery
                    </p>
            </div>
        </div>
    );
}

export default ContactUsPage;