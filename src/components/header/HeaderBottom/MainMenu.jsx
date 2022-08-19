import React from "react";

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="main-menu--wrapper">
        <div className="main-menu--left">
          <nav>
            <ul>
              <li>
                <a href="/">New In</a>
              </li>
              <li>
                <a href="/">Must Have</a>
              </li>
              <li>
                <a href="/">Collections</a>
              </li>
              <li>
                <a href="/">Hot Deals </a>
              </li>
              <li>
                <a href="/">Best Sellers</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-menu--right"></div>
      </div>
    </div>
  );
};

export default MainMenu;
