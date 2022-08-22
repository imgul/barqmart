import React from "react";

const Spotlight = ({ imgSrc }) => {
  return (
    <div className="spotlight--img">
      <img src={imgSrc} alt="Special Offer" />
    </div>
  );
};

export default Spotlight;
