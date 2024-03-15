import React from "react";
import "./index.css";
import CURDBtn from "../../CURDBtn";
const PurchaseNode = () => {
  return (
    <div className="purchase_node">
      <h3 className="node_name">node name</h3>
      <span className="price">node price</span>
      <span className="duration">duration</span>
      <div className="purchase_time">
        <span>pruchase date</span>
        <span>expire date</span>
      </div>
      <span className="user">user</span>
      <div className="crud_btns">
        <CURDBtn />
      </div>
    </div>
  );
};

export default PurchaseNode;
