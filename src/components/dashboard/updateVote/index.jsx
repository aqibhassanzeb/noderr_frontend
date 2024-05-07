import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { GrFormClose } from "react-icons/gr";
import InputContainer from "../InputContainer";
import { createApiContext } from "../../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../ApiLoader";
const UpdateVote = ({ onClose, voteData, setLoading, setVotes }) => {
  const { updatePool, getAllPools } = useContext(createApiContext);
  const [poolTitle, setPoolTitle] = useState("");
  const [poolDuration, setPoolDuration] = useState("");
  const [poolOptions, setPoolOptions] = useState([""]);
  const [poolLoading, setPoolLoading] = useState(false);

  const handleOptionChange = (index, value) => {
    const newOptions = [...poolOptions];
    newOptions[index] = value;
    setPoolOptions(newOptions);
  };
  const addOptionField = () => {
    setPoolOptions([...poolOptions, ""]);
  };

  const removeOptionField = (index) => {
    const newOptions = [...poolOptions];
    newOptions.splice(index, 1);
    setPoolOptions(newOptions);
  };
  useEffect(() => {
    if (voteData) {
      const startTime = new Date(voteData.startTime);
      const endTime = new Date(voteData.endTime);
      // Calculating the difference in milliseconds
      const timeDifferenceInMilliseconds = endTime - startTime;
      // Converting milliseconds to days
      const timeDifferenceInDays = Math.round(
        timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
      );
      setPoolTitle(voteData.voteTitle);
      setPoolDuration(timeDifferenceInDays);
      setPoolOptions(voteData.voteOptions);
    }
  }, [voteData]);
  const handleUpdatePool = async (id, data) => {
    setPoolLoading(true);
    const response = await updatePool(id, data);
    if (response?.status) {
      toast.success("Pool updated successfully");
      setPoolLoading(false);
      setLoading(false);
      // const response = await getAllPools();
      setVotes(prev => !prev);

      onClose();
    } else if (response.response.data.message) {
      console.log(response.response.data.message);
      toast.error(response.response.data.message);
      setPoolLoading(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("voteTitle", poolTitle);
    formData.append("durationInDays", poolDuration);
    poolOptions.forEach((option) => {
      formData.append("voteOptions", option);
    });
    handleUpdatePool(voteData._id, formData);
  };

  return (
    <div className="popUp">
      {poolLoading && <LoadingModal />}
      <div className="popbox">
        <div className="right">
          <span className="close" onClick={onClose}>
            <GrFormClose />
          </span>
        </div>
        <form className="update_pool" onSubmit={handleSubmit}>
          <InputContainer
            label={"vote title"}
            id={"vote_title"}
            type={"text"}
            name={"title"}
            value={poolTitle}
            onChange={(e) => setPoolTitle(e.target.value)}
          />
          <InputContainer
            label={"vote duration"}
            id={"vote_duration"}
            type={"text"}
            value={poolDuration}
            name={"duration"}
            onChange={(e) => setPoolDuration(e.target.value)}
          />
          <div className="vote_options">
            {poolOptions.map((option, index) => (
              <div key={index} className="option_container">
                <InputContainer
                  label={`Option ${index + 1}`}
                  id={`option_${index}`}
                  type={"text"}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeOptionField(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn secondary"
              onClick={addOptionField}
            >
              Add Option
            </button>
          </div>
          <button type="submit" className="btn primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVote;
