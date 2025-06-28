"use client";
import React, { useRef, useEffect, useState } from 'react';
import './Custom.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Featured = () => {

    const projectRef1 = useRef(null);
    const projectRef2 = useRef(null); // New ref for the second project
    const titleRef = useRef(null);

    useEffect(() => {
        const boxTitle = titleRef.current;
        // Animate moving from left to right
        gsap.fromTo(boxTitle,
            { x: -600, opacity: 0 }, // Initial state
            {
                x: 0,
                opacity: 1,
                duration: 1,

                scrollTrigger: {
                    trigger: boxTitle,
                    scrub: true
                }
            }
        );
    }, []);

    useEffect(() => {
        const project = projectRef1.current;
        gsap.fromTo(project,
            { y: -800, opacity: 0 }, // Initial state
            {
                y: 0,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: project,
                    scrub: true,
                    start: "top center",
                    end: "bottom center",
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, []);

    useEffect(() => {
        const project = projectRef2.current;
        // Let's say you want a 50px difference in the final Y position
        gsap.fromTo(project,
            { y: -800 + 50, opacity: 0 }, // Adjust initial Y for the difference
            {
                y: 0 + 50, // Adjust final Y for the difference
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: project,
                    scrub: true,
                    start: "top center",
                    end: "bottom center",
                }
            }
        );
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

    }, []);
    const [aboutBody, setAboutBody] = useState({});
    useEffect(() => {
        // fetch('http://localhost:5000/api/body/')
        // Fetching data from the backend API
        fetch('https://backend2-y2tn.onrender.com/api/body/')
            .then(response => response.json())
            .then(data => setAboutBody(data))
            .catch(error => console.error('Error fetching about data:', error));
    }, []);

    return (
        <div id="featured" className="section bg-gray-800 text-white px-6 py-12 position-relative">
            <div className="max-w-4xl mx-auto">
                <div className='titleBox' ref={titleRef}>
                    <p className="subtitlesection">{aboutBody.featuredSubtitle || "Default Subtitle"}</p>
                    <h2 className="titlesection text-3xl md:text-4xl font-bold mb-6">{aboutBody.featuredTitle || "Default Title"}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Example project items */}
                    <div className="project-item" ref={projectRef1}>
                        <div className='project-image bg-gray-700 p-4 rounded-lg shadow-lg'>
                            <img src="/path/to/image1.jpg" alt="Project 1" />
                        </div>
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-website">www.project1.com</p>
                    </div>
                    <div className="project-item" ref={projectRef2}>
                        <div className='project-image bg-gray-700 p-4 rounded-lg shadow-lg'>
                            <img src="/path/to/image2.jpg" alt="Project 2" />
                        </div>
                        <h3 className="project-name">Project 2</h3>
                        <p className="project-website">www.project2.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Featured;