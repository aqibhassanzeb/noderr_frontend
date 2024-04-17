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
            <div>
              <PageHeader
                page_title={"Available Node Slots"}
                badge={
                  user && userData && userData
                    ? `Hello ${userData?.name}`
                    : "GM, Noderr"
                }
              />
            </div>
            <div className="flex justify-center items-center gap-5">
              <w3m-button size="md" label="Connect Wallet" />

              <Link to={"/dashboard/edit-profile"} className="profile_img">
                <img src={images.profileCircle} />
              </Link>

            </div>


          </div>

          {loadingNodes || loadingProfile ? (
            <NodeLoader skeletonCount={skeletonCount} />
          ) : (
            <div className="dashboard_grid">
              <StatsCard
                stats_img={"https://mintair.xyz/_next/static/media/fuelLogo.69540439.svg"}
                text={"Node 1"}
                slot={10}
                bg_color={"#00f58c"}
                onClick={() => handleNodeClick(nodes[0])}
              />
              <StatsCard
                stats_img={"https://mintair.xyz/_next/static/media/bevmWoBg.3bf8efd6.svg"}
                text={"Node 1"}
                slot={10}
                bg_color={"#e81899"}
                onClick={() => handleNodeClick(nodes[0])}
              />
              <StatsCard
                stats_img={"https://mintair.xyz/_next/static/media/ethLogo.3b3b3b3b.svg"}
                text={"Node 1"}
                slot={10}
                bg_color={"#3042fb"}
                onClick={() => handleNodeClick(nodes[0])}
              />
              <StatsCard
                stats_img={"https://mintair.xyz/_next/static/media/babylonLogo.5acd5d8c.svg"}
                text={"Node 1"}
                slot={10}
                bg_color={"#748cee"}
                onClick={() => handleNodeClick(nodes[0])}
              />
              <StatsCard
                stats_img={"https://mintair.xyz/_next/static/media/zoraWoBg.e16427b5.svg"}
                text={"Node 1"}
                slot={10}
                bg_color={"#FFD9D9"}
                onClick={() => handleNodeClick(nodes[0])}
              />
              {nodes?.length > 0 ? (
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
