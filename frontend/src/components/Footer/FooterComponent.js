// components/FooterComponent/FooterComponent.js
import React from 'react';
import './FooterComponent.scss'; // Import the SCSS file

const FooterComponent = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <a href="/about">Company Information</a>
                    <a href="/success-stories">Success Stories</a>
                    <a href="/our-other-sites">Our Other Sites</a>
                </div>
                
                <div className="footer-section">
                    <h4>Information</h4>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Use</a>
                    <a href="/dating-safety">Dating Safety</a>
                </div>

                <div className="footer-section">
                    <h4>Get in Touch</h4>
                    <a href="/contact">Contact Us</a>
                    <a href="/faq">FAQs</a>
                </div>
            </div>

            <div className="footer-line"></div>
            
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Lotus Love Links. All rights reserved.
            </div>
        </footer>
    );
};

export default FooterComponent;

console.log("FooterComponent loaded");
