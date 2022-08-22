import React from "react";
import Spotlight from "./Spotlight";

const SpotlightSection = () => {
  return (
    <div id="spotlight-section">
      <div className="container-fluid text-center">
        <div className="row justify-content-between">
          <div className="col-4">
            <Spotlight imgSrc="img/spotlight-1.webp" />
          </div>
          <div className="col-4">
            <Spotlight imgSrc="../img/spotlight-2.webp" />
          </div>
          <div className="col-4">
            <Spotlight imgSrc="./img/spotlight-3.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
