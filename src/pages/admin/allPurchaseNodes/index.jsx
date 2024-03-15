import React from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import PurchaseNode from "../../../components/dashboard/purchaseNode";
const AllPurchaseNodebyUsers = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All Purchase Nodes by Users"}
          badge={"GM, Stranger"}
        />  
        <div className="all_purchaseNode">
            <PurchaseNode/>
            <PurchaseNode/>
            <PurchaseNode/>
            <PurchaseNode/>
        </div>
      </div>
    </div>
  );
};

export default AllPurchaseNodebyUsers;
