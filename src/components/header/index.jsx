import React from "react";
import "./index.css";
import { images } from "../../images";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="landing_header">
      <h2 className="side_heading">noderr</h2>
      <img src={images.logo} alt="logo" className="brand" />
      <Link to="/dashboard" className="launch_btn">
        Launch app
      </Link>
    </div>
  );
};

export default Header;
