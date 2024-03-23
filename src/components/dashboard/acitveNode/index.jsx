import React from 'react'
import "./index.css"
import { formatDate } from '../../../helpler'
const ActiveNode = ({node}) => {
  
  return (
    <div className="active_node split-card" style={{background:node.node.bgColor}}>
    <div className="active_node-image">
      <img src={node.node.nodeImage.url} alt="Node"/>
    </div>
    <div className="active_node-content">
      <p class="active_node-title">{node.node.nodeName}</p>
      <p className='content'>Duration: {node.durationMonths} Month</p>
      <p className='content'>Price: {node.price}</p>
      <p className='content'>Purchased: {formatDate(node?.purchaseDate)}</p>
      <p className='content'>Expires: {formatDate(node?.expiryDate)}</p>
    </div>
  </div>
  
  
  )
}

export default ActiveNode