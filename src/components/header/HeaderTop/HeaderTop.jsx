import React from "react";
import HeaderCenter from "./HeaderCenter";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top-container">
        <div className="header-top--wrapper">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
