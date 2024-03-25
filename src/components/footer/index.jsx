import React from 'react'
import "./index.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <span className='text'>Privacy Policy</span>
        <span className='text'>Term of Services</span>
        <span className='icon'><FaXTwitter/></span>
        <span className='icon'><FaTelegramPlane/></span>
      
    </div>
  )
}

export default Footer