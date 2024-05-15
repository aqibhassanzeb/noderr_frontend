import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import PromotionCode from "../../../components/dashboard/promotionCode";
import { createApiContext } from "../../../context/apiContext";
import PromoLoader from "../../../components/skeletonLoaders/promoLoader";
import { toast } from "react-toastify";
import UpdatePromo from "../../../components/dashboard/updatePromo";
import { images } from "../../../images";
import ConfirmationModal from "../../confirmModal";
const AllPromotionCode = () => {

  const { getAllPromoCodes, deletePromoCode, user } = useContext(createApiContext);
  const [promotionCodes, setPromotionCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [promoToDelete, setPromoToDelete] = useState(null);


  //fetch all promotion codes function
  useEffect(() => {
    const fetchPromotionCodes = async () => {
      setLoading(true);
      try {
        const response = await getAllPromoCodes();
        setPromotionCodes(response.data?.promotionCodes
        );
        setLoading(false);
      } catch (error) {
        console.log("Error fetching promotion codes", error);
        setLoading(false);
      }
    };
    fetchPromotionCodes();
  }, [selectedPromo]);

  //delete promotion code function
  const handleDeleteNode = async (id) => {
    console.log("hit delete secction ")
    setLoading(true);
    try {
      const data = await deletePromoCode(id);
      if (data?.status) {
        toast.success("Promotion code deleted successfully");
      }
      // const response = await getAllPromoCodes();
      setPromotionCodes(prevPromo => prevPromo.filter(f => f._id !== id));
      setLoading(false);
    } catch (error) {
      console.log("Error deleting node", error);

      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  //handle node click function
  const handleNodeClick = (promoData) => {
    setSelectedPromo(promoData);
  };

  //handle close node detail function
  const handleCloseNodeDetail = () => {
    setSelectedPromo(null);
  };

  const skeletonCount = Math.floor(window.innerHeight / 100);

  const handleConfirmDelete = () => {
    if (promoToDelete) {
      handleDeleteNode(promoToDelete);
      setPromoToDelete(null);
      setShowConfirmationModal(false);
    }
  };

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All promotion codes"}
          badge={"GM, Noderr"}
          profilePic={images.FakePic}
          create={true}
          link={"/dashboard/create-promotion"}
        />
        {loading ? (
          <PromoLoader skeletonCount={skeletonCount} />
        ) : (
          <div className="all_promotion_codes">
            {promotionCodes?.length > 0 ? (
              user &&
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
                      // onDelete={() => handleDeleteNode(promo._id)}
                      onDelete={() => {
                        setPromoToDelete(promo._id);
                        setShowConfirmationModal(true);
                      }}
                      onEdit={() => handleNodeClick(promo)}
                    />
                  );
                })
            ) : (
              <h1>No promotion code found</h1>
            )}
          </div>
        )}
      </div>
      {selectedPromo && (
        <UpdatePromo
          promoData={selectedPromo}
          onClose={handleCloseNodeDetail}
          setLoading={setLoading}
          setPromotionCodes={setPromotionCodes}
        />
      )}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AllPromotionCode;
