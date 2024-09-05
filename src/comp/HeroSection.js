import React from 'react';
import './HeroSection.css';
import video from './videos/video.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted>
        Your browser does not support the video tag.
      </video>
    </div>
    
  );
}

export default HeroSection;