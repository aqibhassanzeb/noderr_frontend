import React from "react";
import "./index.css";
import { formatDate } from "../../../helpler";

const ActiveNode = ({ node, isNodeExpired, expiry }) => {

  React.useEffect(() => {
    isNodeExpired(node?.purchaseNodes[0]);
  }
    , [node?.purchaseNodes[0]?.expiryDate]);

  return (
    <div
      className={`active_node split-card relative
      `}
      style={{ background: node?.purchaseNodes[0].node?.bgColor }}
    >
      {expiry && <div className=" absolute top-0 right-0 p-1 text-white bg-red-600 rounded-tl-lg rounded-br-lg">
        <p className="font-medium text-xs">Expired</p>
      </div>
      }
      <div className="active_node-image">
        <img src={`${process.env.REACT_APP_NODE_IMG_URL}${node?.purchaseNodes[0].node?.nodeImage?.url}`} alt="Node" />
      </div>
      <div className="active_node-content">
        <p class="active_node-title">{node?.purchaseNodes[0].node?.nodeName}</p>
        <p className="content">Duration: {node?.purchaseNodes[0].durationMonths} Month</p>
        <p className="content">Price: {node?.purchaseNodes[0]?.price}</p>
        <p className="content">Purchased: {node?.purchaseNodes[0] ? formatDate(node.purchaseNodes[0]?.purchaseDate) : "N/A"}</p>
        <p className="content">Expires: {node?.purchaseNodes[0] ? formatDate(node.purchaseNodes[0]?.expiryDate) : "N/A"}</p>
      </div>
    </div>
  );
};

export default ActiveNode;
