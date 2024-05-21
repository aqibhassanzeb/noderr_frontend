import React from "react";
import "./index.css";
import CURDBtn from "../../CURDBtn";
import { formatDate } from "../../../helpler";
const PurchaseNode = ({ node }) => {
  console.log("🚀 ~ PurchaseNode ~ node:", node?.purchaseNodes[0])
  return (
    <div className="purchase_node">
      <h3 className="node_name">{node?.purchaseNodes[0].node?.nodeName}</h3>
      <div className="display_between">
        <span className="left">price</span>
        <span className="right">{node?.purchaseNodes[0].price}</span>
      </div>
      <div className="display_between">
        <span className="left">duration</span>
        <span className="right">{node?.purchaseNodes[0].durationMonths}</span>
      </div>
      <div className="display_between">
        <span className="left">purchase date</span>
        <span className="right">{formatDate(node?.purchaseNodes[0].purchaseDate)}</span>
      </div>
      <div className="display_between">
        <span className="left">expiry date</span>
        <span className="right">{formatDate(node?.purchaseNodes[0].expiryDate)}</span>
      </div>
      <div className="display_between">
        <span className="left">user id</span>
        <span className="right">{node?.purchaseNodes[0].user?._id}</span>
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
