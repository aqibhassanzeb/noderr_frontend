import React, { useContext, useEffect, useState } from "react";
import PageHeader from "../../../components/dashboard/pageHeader/pageHeader";
import Vote from "../../../components/dashboard/vote";
import "./index.css";
import { createApiContext } from "../../../context/apiContext";
import PromoLoader from "../../../components/skeletonLoaders/promoLoader";
import { toast } from "react-toastify";
import UpdateVote from "../../../components/dashboard/updateVote";
const AllVotes = () => {
  const { getAllPools, deletePool, user } = useContext(createApiContext);
  const [votes, setVotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPool, setSelectedPool] = useState(null);

  //handle node click function
  const handleNodeClick = (promoData) => {
    setSelectedPool(promoData);
  };

  //handle close node detail function
  const handleCloseNodeDetail = () => {
    setSelectedPool(null);
  };

  //fetch all promotion codes function
  useEffect(() => {
    const fetchVotes = async () => {
      setLoading(true);
      try {
        const response = await getAllPools();
        setVotes(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching votes", error);
        setLoading(false);
      }
    };
    fetchVotes();
  }, [selectedPool]);

  //delete vote function
  const deleteHnadler = async (id) => {
    setLoading(true);
    try {
      const response = await deletePool(id);
      if (response?.status) {
        toast.success("Vote deleted successfully");
        // const response = await getAllPools();
        setVotes((prevVote) => prevVote.filter((f) => f._id !== id));
        setLoading(false);
      } else if (response.response.data.message) {
        setLoading(false);
        console.log("else");
        toast.error(response.response.data.message);
      }
    } catch (error) {
      console.log("Error deleting vote", error);
      setLoading(false);
    }
  };

  const skeletonCount = Math.floor(window.innerHeight / 100);

  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader
          page_title={"All Votes"}
          badge={" GM, Noderr"}
          create={true}
          link={"/dashboard/create-pool"}
        />
        {loading ? (
          <PromoLoader skeletonCount={skeletonCount} />
        ) : (
          <div className="all_votes">
            {votes?.length > 0 ? (
              user &&
              votes

                .slice()

                .reverse()
                .map((vote, index) => (
                  <Vote
                    key={index}
                    voteData={vote}
                    onEdit={() => handleNodeClick(vote)}
                    onDelete={() => deleteHnadler(vote._id)}
                  />
                ))
            ) : (
              <h1>No vote found</h1>
            )}
          </div>
        )}
      </div>
      {selectedPool && (
        <UpdateVote
          voteData={selectedPool}
          onClose={handleCloseNodeDetail}
          setLoading={setLoading}
          setVotes={setVotes}
        />
      )}
    </div>
  );
};

export default AllVotes;
