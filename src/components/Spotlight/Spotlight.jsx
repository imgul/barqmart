import React from "react";

const Spotlight = ({ imgSrc }) => {
  return (
    <div className="spotlight--img">
      <a href="/">
        <img src={imgSrc} alt="Special Offer" />
      </a>
    </div>
  );
};

export default Spotlight;
