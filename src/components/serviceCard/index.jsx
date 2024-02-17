import React from "react";
import "./index.css";

const ServicesCard = ({ Icon, heading, desc ,data_aos,data_aos_offset,data_aos_duration,data_aos_delay}) => {
  return (
    <div className="service" data-aos={data_aos} data-aos-offset={data_aos_offset} data-aos-duration={data_aos_duration} data-aos-delay={data_aos_delay}>
      <span>
        <Icon className="icon" />
      </span>
      <h4>{heading}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default ServicesCard;
