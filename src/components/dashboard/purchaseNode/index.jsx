import React from "react";
import "./index.css";
import CURDBtn from "../../CURDBtn";
import { formatDate } from "../../../helpler";
const PurchaseNode = ({ node }) => {
  return (
    <div className="purchase_node">
      <h3 className="node_name">{node?.node.nodeName}</h3>
      <div className="display_between">
        <span className="left">price</span>
        <span className="right">{node?.price}</span>
      </div>
      <div className="display_between">
        <span className="left">duration</span>
        <span className="right">{node.durationMonths}</span>
      </div>
      <div className="display_between">
        <span className="left">pruchase date</span>
        <span className="right">{formatDate(node?.purchaseDate)}</span>
      </div>
      <div className="display_between">
        <span className="left">expiry date</span>
        <span className="right">{formatDate(node?.expiryDate)}</span>
      </div>
      <div className="display_between">
        <span className="left">user id</span>
        <span className="right">{node?.user?._id}</span>
      </div>
      <div className="display_between">
        <span className="left">user name</span>
        <span className="right">{node?.user?.name}</span>
      </div>
      <div className="crud_btns">
        <CURDBtn />
      </div>
    </div>
  );
};

export default PurchaseNode;
