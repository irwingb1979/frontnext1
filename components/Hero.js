"use client";
import React from 'react';
import TopBar from './TopBar';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Import the arrow down icon
import './Custom.css'; // Assuming you have a CSS file for styles
import Box from './Box'; // Importing the Box component

const Hero = () => {
    // API call to fetch data can be added here if needed
    // For example, using useEffect to fetch data from an API endpoint

    const [heroData, setHeroData] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/api/hero')
            .then(response => response.json())
            .then(data => setHeroData(data))
            .catch(error => console.error('Error fetching hero data:', error));
    }, []);

    // Split the textBody to isolate "Digital Artist"
    const parts = (heroData.textBody || '').split(' and ');
    const webRoles = parts[0]; // "Web Designer, Web Developer"
    const digitalArtist = parts[1]; // "Digital Artist"

    return (
        <>
        <div id="hero" className="section bg-gray-800 text-white px-6">
            <TopBar />
            <div className="max-w-4xl mx-auto py-20">
                <p className="title text-4xl md:text-5xl mb-4">
                    {heroData.heroTitle || 'Waiting for the API to respond...'}
                </p>
                <p className="bodytext text-lg md:text-xl mb-8">
                    {webRoles} and {' '}
                    <span>
                        {digitalArtist || 'Waiting for the API to respond...'}
                    </span>
                </p>
                <p className='arrow-down'>
                    <FontAwesomeIcon icon={faArrowDown} />
                </p>
            </div>
        </div>
        </>
    );
}
export default Hero;
