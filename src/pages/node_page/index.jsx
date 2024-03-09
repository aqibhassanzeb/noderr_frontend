import React from "react";
import StatsCard from "../../components/nodeCard";
import { images } from "../../images";
import "./index.css";
import Togglor from "../../components/toggle";
import NodeDetail from "../../components/nodeDetail";
const Stats_page = () => {
  return (
    <>
      {/* <NodeDetail /> */}
      <div className="right_dashboard">
        <div className="right_container">
          <div className="header">
            <span className="left">GM, Stranger</span>
            {/* <Togglor/> */}
            {/* <button className="connect_wallet_btn">connect wallet</button> */}
          </div>
          <h2>Deploy a new node</h2>
          <div className="dashboard_grid">
            <StatsCard
              stats_img={images.talko}
              bg_color={"pink"}
              text={"telko"}
            />
            <StatsCard
              stats_img={images.fuel}
              bg_color={"parrot"}
              text={"fuel"}
            />
            <StatsCard
              stats_img={images.zora}
              bg_color={"zora"}
              text={"zora"}
            />
            <StatsCard
              stats_img={images.shardeum}
              bg_color={"shardeum"}
              text={"shardeum"}
            />
            <StatsCard
              stats_img={images.bevm}
              bg_color={"bevm"}
              text={"bevm"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats_page;
