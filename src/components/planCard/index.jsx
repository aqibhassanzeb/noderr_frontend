import React from "react";
import "./index.css";
import Specs from "../specs";

const PlanCard = ({ category, categoryType, price, specification }) => {
  return (
    <div className="plan">
      <div className="top">
        <span className="first">{category}</span>
        <span className="last">{categoryType}</span>
      </div>
      <div className="plan_charge">
        <span className="price">{`${price}`}</span>
        <span className="last">null</span>
      </div>
      <div className="btn secondary">null</div>
      <div className="plan_services_container">
        {specification.map((spec, index) => {
          return <Specs key={index} text={spec.text} />;
        })}
      </div>
    </div>
  );
};

export default PlanCard;
