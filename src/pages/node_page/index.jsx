import React, { useContext, useEffect, useState } from "react";
import StatsCard from "../../components/NodeCard";
import { images } from "../../images";
import "./index.css";
import NodeDetail from "../../components/nodeDetail";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { createApiContext } from "../../context/apiContext";
import NodeLoader from "../../components/skeletonLoaders/nodesLoader";

const Stats_page = () => {
  const { getAllNodes, getProfileData, user, setAddress, userData } =
    useContext(createApiContext);
  const [loadingNodes, setLoadingNodes] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [nodes, setNodes] = React.useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [userDataa, setUserDataa] = useState(null);
  const [handleNodeData, setHandleNodeData] = useState(false)

  //fetch the data from the api (profile and nodes)
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
          setUserDataa(profileResponse.user);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoadingNodes(false);
        setLoadingProfile(false);
      }
    };

    fetchData();
  }, [handleNodeData]);

  //skeleton loader count based on the window height
  const skeletonCount = Math.floor(window.innerHeight / 100);
  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  //close the node detail modal
  const handleCloseNodeDetail = () => {
    setSelectedNode(null);
  };
  return (
    <>
      <div className="right_dashboard">
        <div className="right_container">
          <div className="flex  justify-between w-full">
            <div>
              <PageHeader
                page_title={"Available Node Slots"}
                profilePic={userData && userData?.profilePic ? `${process.env.REACT_APP_NODE_IMG_URL}${userData.profilePic}` : images.FakePic}
                // badge={
                //   user && userDataa && userDataa
                //     ? `Hello ${userDataa?.name}`
                //     : "GM, Noderr"
                // }
                badge={userData && userData.firstName && userData.lastName ? `GM, ${userData.firstName} ${userData.lastName}` : "GM, Noderr"}
              // badge={userData ? `GM, ${userData.firstName} ${userData.lastName}` : "GM, Noderr"}

              />
            </div>

            <div className="gap-5 pt-4 ">
              <w3m-button size="md" label="Connect Wallet" />
            </div>
          </div>
          <p
            className="
          text-xl font-bold text-red-600 leading-relaxed
          "
          >
            "SAFTEY NOTICE" Best Practices is to Create Secondary Wallet for
            Node Slots (Private Keys)
          </p>
          {loadingNodes || loadingProfile ? (
            <NodeLoader skeletonCount={skeletonCount} />
          ) : (
            <div className="dashboard_grid">
              {nodes?.length > 0 ? (
                user &&
                nodes
                  .slice()
                  .reverse()
                  .map((node, index) => {
                    console.log("node1111111111111111111", node);
                    return (
                      <StatsCard
                        key={index}
                        stats_img={node?.node.nodeImage?.url}
                        text={node.node.nodeName}
                        slot={node.node.slots}
                        bg_color={node.node.bgColor}
                        onClick={() => handleNodeClick(node?.node)}
                        userData={userData}
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
        <NodeDetail node={selectedNode} onClose={handleCloseNodeDetail} setHandleNodeData={setHandleNodeData} />
      )}
    </>
  );
};

export default Stats_page;
