import React from 'react'
import "./index.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <span>Privacy Policy</span>
        <span>Term of Services</span>
        <span><FaXTwitter/></span>
        <span><FaDiscord/></span>
        <span></span>
    </div>
  )
}

export default Footer