import React from "react";
import "./index.css";
import Specs from "../specs";

const PlanCard = ({
  category,
  categoryType,
  price,
  specification,
  data_aos,
  data_aos_offset,
  data_aos_duration,
  data_aos_delay,
}) => {
  return (
    <div
      className="plan"
      data-aos={data_aos}
      data-aos-offset={data_aos_offset}
      data-aos-duration={data_aos_duration}
      data-aos-delay={data_aos_delay}
    >
      <div className="top">
        <span className="first">{category}</span>
        {/* <span className="last">{categoryType}</span> */}
      </div>
      <div className="plan_charge">
        <span className="price">{`${price}`}</span>
        {/* <span className="last">null</span> */}
      </div>
      {/* <div className="btn secondary">null</div> */}
      <div className="plan_services_container">
        {specification.map((spec, index) => {
          return <Specs key={index} text={spec.text} />;
        })}
      </div>
    </div>
  );
};

export default PlanCard;
