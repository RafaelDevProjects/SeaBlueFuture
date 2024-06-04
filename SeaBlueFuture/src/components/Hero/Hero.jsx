import React from 'react';
import './Hero.css';

const Hero = ({ videoSrc, children }) => {
    return (
        <div className="hero-container">
            <video className="background-video" autoPlay loop muted>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-contentee">
                {children}
            </div>
        </div>
    );
};

export default Hero;

