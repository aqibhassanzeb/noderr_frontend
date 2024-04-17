import React, { useContext, useEffect } from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import PurchaseNode from "../../../components/dashboard/purchaseNode";
import { createApiContext } from "../../../context/apiContext";
import { toast } from "react-toastify";
import PromoLoader from "../../../components/skeletonLoaders/promoLoader";
const AllPurchaseNodebyUsers = () => {
  const { getAllPurchaseNodeByAdmin } = useContext(createApiContext);
  const [purchaseNode, setPurchaseNode] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    const getPurchaseNode = async () => {
      setLoading(true);
      const data = await getAllPurchaseNodeByAdmin();
      if (data.success) {
        setPurchaseNode(data.data);
        setLoading(false);
      } else if (data.response.data.message) {
        setLoading(false);
        toast.error(data.response.data.message);
      }
    };
    getPurchaseNode();
  }, []);
  const skeletonCount = Math.floor(window.innerHeight / 100);
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All Purchased Nodes by Users"}
          badge={"GM, Noderr"}
        />
        {loading ? (
          <PromoLoader skeletonCount={skeletonCount} />
        ) : (
          <div className="all_purchaseNode">
            {purchaseNode?.length > 0 ? (
              purchaseNode.map((node, nodeIndex) => (
                <PurchaseNode key={nodeIndex} node={node} />
              ))
            ) : (
              <h1>No Purchased Node Found</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPurchaseNodebyUsers;
