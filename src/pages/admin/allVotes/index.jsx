import React from "react";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import Vote from "../../../components/dashboard/vote";
import "./index.css";
const AllVotes = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All Votes"}
          badge={"GM, Stranger"}
          create={true}
          link={"/dashboard/create-pool"}
        />
        <div className="all_votes">
          <Vote />
          <Vote />
          <Vote />
          <Vote />
          <Vote />
          <Vote />
        </div>
      </div>
    </div>
  );
};

export default AllVotes;
