import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <header className="header">
          <HeaderTop />
          <HeaderBottom />
        </header>
      </div>
    </>
  );
};

export default Header;
