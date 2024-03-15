import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import Node from "../../../components/dashboard/node";
import { allNodeData } from "../../../data/nodeData";
import { createApiContext } from "../../../context/apiContext";
import AdminNodeLoader from "../../../components/skeletonLoaders/adminnodesLoader";
import { toast } from "react-toastify";
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
        toast.error(error.response.data.message)
      }
    };
    fetchNodes();
  }, []);
  const handleDeleteNode = async (id) => {
    setLoading(true);
    try {
      const data = await deleteNode(id);
      if(data?.status){
        toast.success("Node deleted successfully");
      }
      // Node deleted successfully, refetch nodes
      const response = await getAllNodes();
      setNodes(response);
      setLoading(false);
    } catch (error) {
      console.log("Error deleting node", error);
      setLoading(false);
    }
  };
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
          <AdminNodeLoader />
        ) : (
          <div className="all_nodes">
            {nodes &&
              nodes?.map((node, index) => {
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
    </div>
  );
};

export default AllNodes;
