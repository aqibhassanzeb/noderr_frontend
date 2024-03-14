import React from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import PromotionCode from "../../../components/dashboard/promotionCode";
const AllPromotionCode = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"All promotion codes"} badge={"GM, Stranger"}/>
        <div className="all_promotion_codes"> 
          <PromotionCode/>  
          <PromotionCode/>  
          <PromotionCode/>  
          <PromotionCode/>  
          <PromotionCode/>  
        </div>
      </div>
    </div>
  );
};

export default AllPromotionCode;
