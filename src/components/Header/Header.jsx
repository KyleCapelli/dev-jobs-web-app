import React from "react";
import { Link } from "react-router-dom";
import SwitchButton from "./SwitchButton/SwitchButton";
import "./Header.css";

const Header = ({ setNightModeToggle, toggleNightMode }) => {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/desktop/logo.svg`}
            alt="devjobs-logo"
          />
        </Link>
        <div className="header__mode-selector">
          <img
            src={`${process.env.PUBLIC_URL}/desktop/icon-sun.svg`}
            alt="sun-icon"
          />
          <SwitchButton setNightModeToggle={setNightModeToggle} />
          <img
            src={`${process.env.PUBLIC_URL}/desktop/icon-moon.svg`}
            alt="sun-moon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
