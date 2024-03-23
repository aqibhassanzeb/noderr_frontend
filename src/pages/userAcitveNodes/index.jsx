import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import ActiveNode from "../../components/dashboard/acitveNode";
import { createApiContext } from "../../context/apiContext";
const UserActiveNode = () => {
  const {getPurchaseNode} = useContext(createApiContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPurchaseNode();
  }, []);
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"User active nodes"} badge={"GM, Stranger"} />
        <div className="active_nodes_container">
            <ActiveNode/>
            <ActiveNode/>
        </div>
      </div>
    </div>
  );
};

export default UserActiveNode;
