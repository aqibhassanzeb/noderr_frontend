import React from "react";
import "./index.css";

const ServicesCard = ({Icon,heading,desc}) => {
  return (
    <div className="service">
      <span>
        <Icon className="icon" />
      </span>
      <h4>{heading}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default ServicesCard;
