"use client";
import React, { useRef, useEffect, useState } from 'react';
import './Custom.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    //Animation <div className='box a'>a</div>
    const boxRef = useRef(null);
    useEffect(() => {
        const box = boxRef.current;
        // Animate moving from left to right
        gsap.fromTo(box,
            { x: 0, opacity: 0 }, // Initial state
            {
                x: 200,
                opacity: .2,
                duration: 1,

                scrollTrigger: {
                    trigger: box,
                    scrub: true
                }
            }
        );
    }, []);

    const [aboutBody, setAboutBody] = useState({});
    useEffect(() => {
        // fetch('http://localhost:5000/api/body/')
        fetch('https://backend2-y2tn.onrender.com/api/body/')
            .then(response => response.json())
            .then(data => setAboutBody(data))
            .catch(error => console.error('Error fetching about data:', error));
    }, []);


    return (
        <div id="about" className="section bg-gray-100 text-gray-800 px-6 py-12 position-relative">
            <div className="max-w-4xl mx-auto">

                <h1 className='titleback' ref={boxRef}>{aboutBody.aboutTitle || "Default Title"}</h1>
                <p className="subtitlesection">{aboutBody.aboutSubtitle || "Default Subtitle"}</p>
                <h2 className="titlesection text-3xl md:text-4xl font-bold mb-6">{aboutBody.aboutTitle || "Default Title"}</h2>
                <p className="text-lg md:text-xl mb-4">
                    {aboutBody.aboutText}
                </p>
            </div>
        </div>
    );
}
export default About;