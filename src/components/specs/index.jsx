import React from "react";
import "./index.css";
import { TiTick } from "react-icons/ti";

const Specs = ({text}) => {
  return (
    <div className="plan_services">
      <span>
        <TiTick className="icon" />
      </span>
      <span className="text">{text}</span>
    </div>
  );
};

export default Specs;
