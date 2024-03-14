import React from "react";
import StatsCard from "../../components/NodeCard";
import { images } from "../../images";
import "./index.css";
import Togglor from "../../components/toggle";
import NodeDetail from "../../components/nodeDetail";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
const Stats_page = () => {
  return (
    <>
      {/* <NodeDetail /> */}
      <div className="right_dashboard">
        <div className="right_container">
          <PageHeader page_title={"Deploy A New Node"} badge={"GM, Stranger"}/>
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
