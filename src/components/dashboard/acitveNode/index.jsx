import React from "react";
import "./index.css";
import { formatDate } from "../../../helpler";

const ActiveNode = ({ node, isNodeExpired, expiry }) => {
  console.log("🚀 ~ ActiveNode ~ node:", node);

  React.useEffect(() => {
    isNodeExpired(node?.expiry_date);
    // isNodeExpired(node?.purchaseNodes[0]);
  }, [node?.expiry_date]);

  return (
    <div
      className={`active_node split-card relative
      `}
      style={{ background: node?.nodeKey?.bgColor }}
    >
      {expiry && (
        <div className=" absolute top-0 right-0 p-1 text-white bg-red-600 rounded-tl-lg rounded-br-lg">
          <p className="font-medium text-xs">Expired</p>
        </div>
      )}
      <div className="active_node-image">
        <img
          src={`${process.env.REACT_APP_NODE_IMG_URL}${node?.nodeKey?.nodeImage?.url}`}
          alt="Node"
        />
      </div>
      <div className="active_node-content">
        <h3 className="active_node-title">{node?.node_type}</h3>
        <p
          className="text-lg font-medium cursor-pointer border-b">
          <a
            href={`http://${node?.vm_ip}:3000/d/yns_4vFVk/nwaku-monitoring?orgId=1&refresh=1m`}
            target="_blank"
          >
            Click here to view monitoring
          </a>
        </p>
        {/* <p className="content">Duration: {node?.durationMonths} Month</p> */}
        {/* <p className="content">Price: {node?.price}</p> */}
        {node?.promotionDays > 0 && (
          <p className="content">Expire In: {node?.promotionDays}</p>
        )}
        <p className="content">
          Purchased: {node ? formatDate(node?.purchase_date) : "N/A"}
        </p>
        <p className="content">
          Expires: {node ? formatDate(node?.expiry_date) : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ActiveNode;
