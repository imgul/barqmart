import React from "react";
import Spotlight from "./Spotlight";

const SpotlightBottomSection = () => {
  return (
    <div id="spotlight-bottom-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <Spotlight imgSrc="img/spotlight-4.webp" />
          </div>
          <div className="col-12 col-md-6">
            <Spotlight imgSrc="../img/spotlight-5.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightBottomSection;
