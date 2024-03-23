import React from 'react'
import "./index.css"
const ActiveNode = () => {
  return (
    <div className="active_node split-card" style={{background:"#e81899"}}>
    <div className="active_node-image">
      <img src="https://res.cloudinary.com/sheriue/image/upload/v1710780356/node/xveesj21tfcb6nu84dxv.svg" alt="Node"/>
    </div>
    <div className="active_node-content">
      <p class="active_node-title">bevm</p>
      <p className='content'>Duration: 1 Month</p>
      <p className='content'>Price: PKR 23</p>
      <p className='content'>Purchased: Wednesday, March 20, 2024</p>
      <p className='content'>Expires: Saturday, April 20, 2024</p>
    </div>
  </div>
  
  
  )
}

export default ActiveNode