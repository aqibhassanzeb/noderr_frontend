import React, { useState } from "react";
import { images } from "../../images";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./index.css";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="header-container">
      <div className="brand">
        <img src={images.logo} alt="logo" />
      </div>
      <nav className={`navbar ${showNav ? "show" : ""}`}>
        <ul>
          <li>products</li>
          <li>solutions</li>
          <li>pricing</li>
          <li>docs</li>
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
    </header>
  );
};

export default Header;
