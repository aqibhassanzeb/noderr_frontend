import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../../../components/dashboard/pageHeader/pageHeader";
import Node from "../../../../components/dashboard/node";
import { allNodeData } from "../../../../data/nodeData";
import { createApiContext } from "../../../../context/apiContext";
import AdminNodeLoader from "../../../../components/skeletonLoaders/adminnodesLoader";
import { toast } from "react-toastify";
import UpdateNode from "../../../../components/dashboard/updateNode";
const AllNodes = () => {
  const { getAllNodes, deleteNode } = useContext(createApiContext);
  const [loadding, setLoading] = useState(true);
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const response = await getAllNodes();
        setNodes(response);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching nodes", error);
        toast.error(error.response.data.message);
      }
    };
    fetchNodes();
  }, []);
  const handleDeleteNode = async (id) => {
    setLoading(true);

    const data = await deleteNode(id);
    if (data?.status) {
      toast.success("Node deleted successfully");
      const response = await getAllNodes();
      setNodes(response);
      setLoading(false);
    } else if (data.response.data.message) {
      console.log("else");
      setLoading(false);
      toast.error(data.response.data.message);
    }
    // Node deleted successfully, refetch nodes
  };
  const skeletonCount = Math.floor(window.innerHeight / 100);

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All Nodes"}
          badge={"GM, Stranger"}
          create={true}
          link={"/dashboard/create-node"}
        />
        {loadding ? (
          <AdminNodeLoader skeletonCount={skeletonCount} />
        ) : (
          <div className="all_nodes">
            {nodes &&
              nodes
                .slice()
                .reverse()
                ?.map((node, index) => {
                  return (
                    <Node
                      key={index}
                      node={node}
                      onDelete={() => handleDeleteNode(node._id)}
                    />
                  );
                })}
          </div>
        )}
      </div>
      <UpdateNode />
    </div>
  );
};

export default AllNodes;
