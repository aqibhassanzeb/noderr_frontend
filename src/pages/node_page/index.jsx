import React, { useContext, useEffect, useState } from "react";
import StatsCard from "../../components/NodeCard";
import { images } from "../../images";
import "./index.css";
import Togglor from "../../components/toggle";
import NodeDetail from "../../components/nodeDetail";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import { createApiContext } from "../../context/apiContext";
import NodeLoader from "../../components/skeletonLoaders/nodesLoader";
const Stats_page = () => {
  const { getAllNodes } = useContext(createApiContext);
  const [loadding, setLoading] = React.useState(true);
  const [nodes, setNodes] = React.useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const response = await getAllNodes();
        setNodes(response);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching nodes", error);
      }
    };
    fetchNodes();
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
          <PageHeader page_title={"Deploy A New Node"} badge={"GM, Stranger"} />
          {loadding ? (
            <NodeLoader skeletonCount={skeletonCount} />
          ) : (
            <div className="dashboard_grid">
              {nodes &&
                nodes.slice().reverse().map((node, index) => {
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
                })}
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
