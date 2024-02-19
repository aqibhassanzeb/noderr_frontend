import React, { useState } from "react";
import { images } from "../../images";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./index.css";
import Toggle from "react-toggle";
import { FaSun } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "../../themeContext/themeContext";
import Togglor from "../toggle";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header-container">
      <div className="brand">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="right">
        <nav className={`navbar ${showNav ? "show" : ""}`}>
          <ul>
            <li>products</li>
            <li>solutions</li>
            <li>pricing</li>
          </ul>
          <div className="btn-container">
            <button className="btn primary">connect wallet</button>
          </div>
          <div onClick={() => setShowNav(!showNav)} className="close">
            <IoIosCloseCircleOutline className="icon" />
          </div>
        </nav>
        <div className="hamburger" onClick={() => setShowNav(!showNav)}>
          <GiHamburgerMenu className="icon" />
        </div>
        <Togglor />
        {/* <Toggle
        defaultChecked={theme === "dark"}
        onChange={toggleTheme}
        icons={{ checked: <BsMoonFill />, unchecked: <FaSun style={{color:"yellow"}} /> }}
      /> */}
      </div>
    </header>
  );
};

export default Header;
