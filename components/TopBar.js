//Logo and navigation bar component
import React from 'react';
import './Custom.css'; // Assuming you have a CSS file for styles   

const TopBar = () => {


    return (
        <div id="top-bar" className="bg-gray-800 text-white">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div className="logo-container">
                    <h1>IB</h1>
                </div>
                <nav className="navigation">
                    <ul className="hidden md:flex space-x-6"> {/* These are existing Tailwind classes for the ul */}
                        <li><a href="#hero" className="hover:text-blue-600 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
                        <li><a href="#portfolio" className="hover:text-blue-600 transition-colors ">Portfolio</a></li>
                        <li><a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a></li>
                        {/* Contact link with different styling */}
                        <li>
                            <a href="#contact" className="contact-link
                                    text-white font-semibold       
                                    py-1.5 px-3                       
                                    rounded-full                      
                                    transition-colors duration-300    
                                    text-base                         
                                ">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default TopBar;