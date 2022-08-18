import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-container--img">
          <div className="hero-container--img--inner">
            <div className="hero-text-container">
              <h2 className="hero-heading">
                <span>Huge Saving</span> on <br />
                UHD Televisions
              </h2>
              <div className="hero-description">
                Sales upto 70% OFF on selected items*
              </div>
              <div className="hero-cta">
                <button className="btn btn-outline-light rounded-pill cta-primary">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
