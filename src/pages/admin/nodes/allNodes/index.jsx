import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../../../components/dashboard/pageHeader/pageHeader";
import Node from "../../../../components/dashboard/node";
import { createApiContext } from "../../../../context/apiContext";
import AdminNodeLoader from "../../../../components/skeletonLoaders/adminnodesLoader";
import { toast } from "react-toastify";
import UpdateNode from "../../../../components/dashboard/updateNode";
import { images } from "../../../../images";
const AllNodes = () => {

  const { getAllNodes, deleteNode, user } = useContext(createApiContext);
  const [loadding, setLoading] = useState(false);
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [handleFetch, setHandleFetch] = useState(false);

  //fetch all nodes function
  useEffect(() => {
    const fetchNodes = async () => {
      try {
        setLoading(true);
        const response = await getAllNodes();
        setNodes(response);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching nodes", error);
        setLoading(false);
        toast.error(error.message);
      }
    };
    fetchNodes();
  }, [handleFetch]);

  //delete node function
  const handleDeleteNode = async (id) => {
    setLoading(true);
    try {
      await deleteNode(id);
      setHandleFetch(!handleFetch);
      toast.success("Node deleted successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const skeletonCount = Math.floor(window.innerHeight / 100);

  //handle node click function
  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  //handle close node detail function
  const handleCloseNodeDetail = () => {
    setSelectedNode(null);
  };

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All Nodes"}
          badge={"GM, Noderr"}
          profilePic={images.FakePic}
          create={true}
          link={"/dashboard/create-node"}
        />
        {loadding ? (
          <AdminNodeLoader skeletonCount={skeletonCount} />
        ) : (
          <div className="all_nodes">
            {nodes?.length > 0 ? (
              user &&
              nodes
                .slice()
                .reverse()
                ?.map((node, index) => {
                  return (
                    <Node
                      key={index}
                      node={node}
                      onDelete={() => handleDeleteNode(node._id)}
                      onClick={() => handleNodeClick(node)}
                      bg_color={node.bgColor}
                    />
                  );
                })
            ) : (
              <h1>No Node Found</h1>
            )}
          </div>
        )}
      </div>
      {selectedNode && (
        <UpdateNode
          node={selectedNode}
          onClose={handleCloseNodeDetail}
          setNodes={setNodes}
          setLoading={setLoading}
          setHandleFetch={setHandleFetch}
        />
      )}
    </div>
  );
};

export default AllNodes;
