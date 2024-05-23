import React from "react";
import "./index.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import {  BsInstagram } from "react-icons/bs";
import { BsDiscord  } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <span className="text">
        <a href="privacy-policy">Privacy Policy</a>
      </span>
      <span className="text">
        <a href="terms-and-conditions">Terms of Use</a>
      </span>
      {/* <span className="icon">
        <a
          href="https://x.com/NoderrNoderrxyz?t=ur-xp14gkfRZiduGgzIqVA&s=09"
          target="_blank"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </span>
      <span className="icon">
        <a
          href="https://discord.gg/SaqBPJn3ZA"
          target="_blank"
          aria-label="Discord"
        >
          <BsDiscord />
        </a>
      </span>
      <span className="icon">
        <a
          href="https://x.com/NoderrNoderrxyz?t=ur-xp14gkfRZiduGgzIqVA&s=09"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTelegramPlane/>
        </a>
      </span>
      <span className="icon">
        <a href="https://t.me/NoderrSupp" target="_blank" aria-label="Telegram">
          <BsInstagram />
        </a>
      </span> */}
    <div id="w-node-_22aaa6c3-d6e7-05e0-eec1-5d107e13b5d4-ee31794f" className="fn-links-wrapper-2 flex items-center gap-2 p-1 pr-2">
							<a href="https://twitter.com/NoderrNoderrxyz?t=ur-xp14gkfRZiduGgzIqVA&s=09" target="_blank" className="w-inline-block"><img src={require("./../../assets/images/2-p-500.png")} loading="lazy" style={{ width: "38px" }} alt srcSet={require("./../../assets/images/2-p-500.png")} className="image-14" /></a>

							<a href="https://discord.com/invite/SaqBPJn3ZA" target="_blank" className="w-inline-block"><img src={require("./../../assets/images/3670325.png")} loading="lazy" style={{ width: "38px" }} alt srcSet={require("./../../assets/images/3670325.png")} className="image-14" /></a>
							<a href="https://t.me/NoderrSupp" target="_blank" className="w-inline-block"><img style={{ width: "38px" }} src={require("./../../assets/images/telegram-black-icon.webp")} loading="lazy" alt className="image-13" /></a>
							<a href="https://instagram.com/Noderrxyz" target="_blank" className="w-inline-block"><img src={require("./../../assets/images/1.png")} loading="lazy" style={{ width: "38px" }} alt className="image-14" /></a>
						</div>
    </div>
  );
};

export default Footer;
