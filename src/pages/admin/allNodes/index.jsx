import React from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
const AllNodes = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"All Nodes"} badge={"GM, Stranger"} />
      </div>
    </div>
  );
};

export default AllNodes;
