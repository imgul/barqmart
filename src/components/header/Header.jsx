import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <header className="header">
          <HeaderTop />
        </header>
      </div>
    </>
  );
};

export default Header;
