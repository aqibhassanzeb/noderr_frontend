import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import ActiveNode from "../../components/dashboard/acitveNode";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import PromoLoader from "../../components/skeletonLoaders/promoLoader";
import { images } from "../../images";
const UserActiveNode = () => {
  const { getPurchaseNode } = useContext(createApiContext);
  const [activeNodes, setActiveNodes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const acitveNodes = async () => {
      setLoading(true);
      const data = await getPurchaseNode();
      if (data.success) {
        console.log(data);
        setActiveNodes(data.data);
        setLoading(false);
      } else if (data.response.data.message) {
        setLoading(false);
        toast.error(data.response.data.message);
      }
    };
    acitveNodes();
  }, [getPurchaseNode]);
  const skeletonCount = Math.floor(window.innerHeight / 100);
  return (
    <div className="right_dashboard">
      <div className="right_container">

        <PageHeader page_title={"User active nodes"} badge={"GM, Noderr"}
          profilePic={images.FakePic} />
        {loading ? (
          <PromoLoader skeletonCount={skeletonCount} />
        ) : activeNodes?.length > 0 ? (
          <>
            <div className="active_nodes_container">
              {activeNodes && activeNodes?.map((node, index) => (
                <ActiveNode key={index} node={node} />
              ))}
            </div>
          </>
        ) : (
          <h1>No active node found</h1>
        )}
      </div>
    </div>
  );
};

export default UserActiveNode;
