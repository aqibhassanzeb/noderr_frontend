import React, { useContext, useEffect, useState } from "react";
import StatsCard from "../../components/NodeCard";
import { images } from "../../images";
import "./index.css";
import Togglor from "../../components/toggle";
import NodeDetail from "../../components/nodeDetail";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { createApiContext } from "../../context/apiContext";
import NodeLoader from "../../components/skeletonLoaders/nodesLoader";
import { Link } from "react-router-dom";
const Stats_page = () => {
  const { getAllNodes, getProfileData, user } = useContext(createApiContext);
  const [loadingNodes, setLoadingNodes] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [nodes, setNodes] = React.useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingNodes(true);
        setLoadingProfile(true);
        const [nodesResponse, profileResponse] = await Promise.all([
          getAllNodes(),
          getProfileData(),
        ]);
        setNodes(nodesResponse);
        if (profileResponse.success) {
          setUserData(profileResponse.user);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoadingNodes(false);
        setLoadingProfile(false);
      }
    };

    fetchData();
  }, []);
  const skeletonCount = Math.floor(window.innerHeight / 100);
  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleCloseNodeDetail = () => {
    setSelectedNode(null);
  };
  return (
    <>
      <div className="right_dashboard">
        <div className="right_container">
          <div className="page_header_container">
            <PageHeader
              page_title={"Deploy A New Node"}
              badge={
                user && userData && userData
                  ? `Hello ${userData?.name}`
                  : "GM, Stranger"
              }
            />
            <Link to={"/dashboard/edit-profile"} className="profile_img">
              <img src={images.profileCircle} />
            </Link>
          </div>

          {loadingNodes || loadingProfile ? (
            <NodeLoader skeletonCount={skeletonCount} />
          ) : (
            <div className="dashboard_grid">
              {nodes.length > 0 ? (
                nodes &&
                nodes
                  .slice()
                  .reverse()
                  .map((node, index) => {
                    return (
                      <StatsCard
                        key={index}
                        stats_img={node.nodeImage.url}
                        text={node.nodeName}
                        slot={node.slots}
                        bg_color={node.bgColor}
                        onClick={() => handleNodeClick(node)}
                      />
                    );
                  })
              ) : (
                <h1>No Node Found</h1>
              )}
            </div>
          )}
        </div>
      </div>
      {selectedNode && (
        <NodeDetail node={selectedNode} onClose={handleCloseNodeDetail} />
      )}
    </>
  );
};

export default Stats_page;
