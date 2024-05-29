import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import ActiveNode from "../../components/dashboard/acitveNode";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import PromoLoader from "../../components/skeletonLoaders/promoLoader";
import { images } from "../../images";
import io from 'socket.io-client';

const UserActiveNode = () => {
  const { getPurchaseNode } = useContext(createApiContext);
  const [activeNodes, setActiveNodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expiry, setExpiry] = useState(false);

  const socket = io(process.env.REACT_APP_NODE_ENDPOINT);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    socket.on('nodePurchased', (data) => {
      toast.success("Payment successful, node purchased successfully", {
        theme: "colored"
      });
      acitveNodes();
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('nodePurchased');
    }
  }, []);


  const acitveNodes = async () => {
    setLoading(true);
    const data = await getPurchaseNode();
    if (data.success) {
      setActiveNodes(data.data);
      setLoading(false);
    } else if (data.response.data.message) {
      setLoading(false);
      toast.error(data.response.data.message);
    }
  };

  // get active nodes
  useEffect(() => {
    acitveNodes();
  }, [getPurchaseNode]);

  const skeletonCount = Math.floor(window.innerHeight / 100);

  const isNodeExpired = (expiryDate) => {
    const currentDate = new Date();
    setExpiry(new Date(expiryDate?.expiryDate) < currentDate)

  };

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
              {activeNodes.length > 0 && activeNodes?.map((node, index) => (
                <ActiveNode key={index} node={node} isNodeExpired={isNodeExpired} expiry={expiry} />
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
