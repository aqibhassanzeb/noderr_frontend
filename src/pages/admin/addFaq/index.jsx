import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { toast } from "react-toastify";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import AdminNodeLoader from "../../../components/skeletonLoaders/adminnodesLoader";
import { images } from "../../../images";
import { createApiContext } from "../../../context/apiContext";
import FAQ from "../../../components/addFaq";
import UpdateFaq from "../../../components/updateFaq";
const AddFaq = () => {

  
  const {userData, getAllFaq, deleteFaq } = useContext(createApiContext);
  const [loadding, setLoading] = useState(true);
  const [faq, setFaq] = useState([]);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [updateCont, setUpdateCont] = useState(true);

  //fetch all FAQ function
  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await getAllFaq();
        setFaq(response?.data?.faq);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching nodes", error);
        setLoading(false);
        toast.error(error?.response?.data?.message || "something went wrong!");
      }
    };
    fetchFaq();
  }, [updateCont]);

  //delete FAQ function
  const handleDeleteFaq = async (id) => {
    setLoading(true);
    const data = await deleteFaq(id);
    if (data?.status) {
      toast.success("Faq deleted successfully");
      setFaq(prevFaq => prevFaq.filter(f => f._id !== id));
      setLoading(false);
    } else if (data.response.data.message) {
      console.log("else");
      setLoading(false);
      toast.error(data.response.data.message);
    }
  };

  const skeletonCount = Math.floor(window.innerHeight / 100);

  //handle FAQ click function
  const handleFaqClick = (node) => {
    setSelectedFaq(node);
  };

  //handle close node detail function
  const handleCloseNodeDetail = () => {
    setSelectedFaq(null);
  };

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All FAQ"}
          badge={"GM, Noderr"}
          profilePic={userData?.profilePic? `${process.env.REACT_APP_NODE_IMG_URL}${userData.profilePic}` : images.FakePic}
          create={true}
          link={"/dashboard/create-faq"}
        />
        {loadding ? (
          <AdminNodeLoader skeletonCount={skeletonCount} />
        ) : (
          <div className="all_nodes">
            {faq?.length > 0 ? (
              faq &&
              faq
                .slice()
                .reverse()
                ?.map((faq, index) => {
                  return (
                    <FAQ
                      key={index}
                      faq={faq}
                      onDelete={() => handleDeleteFaq(faq._id)}
                      onClick={() => handleFaqClick(faq)}
                    />
                  );
                })
            ) : (
              <h1>No Faq Found</h1>
            )}
          </div>
        )}
      </div>
      {selectedFaq && (
        <UpdateFaq
          faq={selectedFaq}
          handleFetch={setUpdateCont}
          onClose={handleCloseNodeDetail}
          setFaq={setFaq}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default AddFaq;
