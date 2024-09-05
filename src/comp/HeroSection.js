import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video.mp4" autoPlay loop muted>
        Your browser does not support the video tag.
      </video>
    </div>
    
  );
}

export default HeroSection;