import React from "react";
import Spotlight from "./Spotlight";

const SpotlightSection = () => {
  return (
    <div id="spotlight-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <Spotlight imgSrc="img/spotlight-1.webp" />
          </div>
          <div className="col-12 col-md-4">
            <Spotlight imgSrc="../img/spotlight-2.webp" />
          </div>
          <div className="col-12 col-md-4">
            <Spotlight imgSrc="./img/spotlight-3.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
