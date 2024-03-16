import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import PromotionCode from "../../../components/dashboard/promotionCode";
import { createApiContext } from "../../../context/apiContext";
import PromoLoader from "../../../components/skeletonLoaders/promoLoader";
import { toast } from "react-toastify";
const AllPromotionCode = () => {
  const { getAllPromoCodes, deletePromoCode } = useContext(createApiContext);
  const [promotionCodes, setPromotionCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPromotionCodes = async () => {
      setLoading(true);
      try {
        const response = await getAllPromoCodes();
        setPromotionCodes(response);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching promotion codes", error);
        setLoading(false);
      }
    };
    fetchPromotionCodes();
  }, []);
  const handleDeleteNode = async (id) => {
    setLoading(true);
    try {
      const data = await deletePromoCode(id);
      if (data?.status) {
        toast.success("Promotion code deleted successfully");
      }
      // Node deleted successfully, refetch nodes
      const response = await getAllPromoCodes();
      setPromotionCodes(response);
      setLoading(false);
    } catch (error) {
      console.log("Error deleting node", error);

      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const skeletonCount = Math.floor(window.innerHeight / 100);
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All promotion codes"}
          badge={"GM, Stranger"}
          create={true}
          link={"/dashboard/create-promotion"}
        />
        {loading ? (
          <PromoLoader skeletonCount={skeletonCount} />
        ) : (
          <div className="all_promotion_codes">
            {promotionCodes &&
              promotionCodes
                .slice()
                .reverse()
                .map((promo, index) => {
                  return (
                    <PromotionCode
                      key={index}
                      code={promo.code}
                      discount={promo.discountPercentage}
                      maxUsage={promo.maxUsage}
                      currentUsage={promo.currentUsage}
                      expiryDate={promo.expiryDate}
                      onDelete={() => handleDeleteNode(promo._id)}
                    />
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPromotionCode;
