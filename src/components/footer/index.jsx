import React from "react";
import "./index.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <span className="text">
        <a href="privacy-policy">Privacy Policy</a>
      </span>
      <span className="text">
        <a href="terms-and-conditions">Terms of Use</a>
      </span>
      <span className="icon">
        <a
          href="https://discord.com/invite/3x8v7QR2WN"
          target="_blank"
        >
          <FaDiscord />
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
      <span className="icon">
        <a href="https://t.me/NoderrSupp" target="_blank">
          <FaTelegramPlane />
        </a>
      </span>
    </div>
  );
};

export default Footer;
