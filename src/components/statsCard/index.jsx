import React from "react";
import "./index.css";
const StatsCard = ({stats_img ,bg_color,text }) => {
  return (
    <div className={`stats_box ${bg_color}`}>
      <div className="icon_container">
        <img src={stats_img} alt="stats" />
      </div>
      <div className="stats_digit">
        <h4>{text}</h4>
        <span>slots : 31</span>
      </div>
    </div>
  );
};

export default StatsCard;
