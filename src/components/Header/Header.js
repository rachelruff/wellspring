import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = props => {
  return (
    <div class="header">
      <div class="header__logo-box">
        <img src={logo} alt="Wellspring Realty" class="header__logo" />
      </div>
      <ul className="header--nav">
        <li>Home</li>
        <li>Featured Propertiesss</li>
        <li>About ussss</li>
        <li>Contact</li>
        <li>Charities</li>
      </ul>
    </div>
  );
};

export default Header;
