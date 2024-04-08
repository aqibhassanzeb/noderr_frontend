import React from "react";
import "./index.css";
import { images } from "../../images";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="landing_header">
      {/* <h2 className="side_heading"> */}
		<img src={images.TextLogo} className="text_logo"/>
        {/* <p>
          &#55356;&#56701;&#55356;&#56702;&#55356;&#56691;&#55356;&#56692;&#55356;&#56705;&#55356;&#56705;
        </p> */}
      {/* </h2> */}
      <img src={images.LogoGif} alt="logo" className="brand" />
      <div className="social_icons">
        <span className="icon">
          <a href="https://t.me/NoderrSupp" target="_blank">
            <FaTelegramPlane />
          </a>
        </span>
        <span className="icon">
          <a
            href="https://x.com/NoderrNoderrxyz?t=ur-xp14gkfRZiduGgzIqVA&s=09"
            target="_blank"
          >
            <FaXTwitter />
          </a>
        </span>
      </div>
      {/* <Link to="/dashboard" className="launch_btn"> */}
      <Link to="/dashboard">
        {/* <span class="bi bi-rocket"></span> Launch Node */}
      </Link>
    </div>
  );
};

export default Header;
