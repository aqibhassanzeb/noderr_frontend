import React from "react";
import "./index.css";
const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="side_menu">
        <div className="brand_log">Logo</div>
        <div className="menu_list">
          <a className="menu_item">
            <li>dashboard</li>
          </a>
          <a className="menu_item">
            <li>Support</li>
          </a>
        </div>
      </div>
      <div className="right_dashborad">
        <div className="header">
          <span className="left">GM, Stranger</span>
          <button className="connect_wallet_btn">connect wallet</button>
        </div>
        <h2>Deploy a new node</h2>
        <div className="dashboard_grid">
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
