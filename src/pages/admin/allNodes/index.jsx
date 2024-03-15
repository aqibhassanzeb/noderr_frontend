import React from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import Node from "../../../components/dashboard/node";
import { allNodeData } from "../../../data/nodeData";
const AllNodes = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All Nodes"}
          badge={"GM, Stranger"}
          create={true}
          link={"/dashboard/create-node"}
        />
        <div className="all_nodes">
          {allNodeData.map((node, index) => {
            return <Node key={index} node={node} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllNodes;
