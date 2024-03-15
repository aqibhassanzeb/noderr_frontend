import React from "react";
import "./index.css";
const NodeCard = ({ stats_img, bg_color, text, slot,onClick}) => {
  return (
    <div className={`stats_box`} style={{ background: bg_color }} onClick={onClick}>
      <div className="icon_container">
        <img src={stats_img} alt="stats" />
      </div>
      <div className="stats_digit">
        <h4>{text}</h4>
        <span>slots : {slot}</span>
      </div>
    </div>
  );
};

export default NodeCard;
