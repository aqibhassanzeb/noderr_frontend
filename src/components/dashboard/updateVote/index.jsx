import React, { useEffect, useState } from "react";
import "./index.css";
import { GrFormClose } from "react-icons/gr";
import InputContainer from "../InputContainer";
const UpdateVote = ({ onClose, voteData }) => {
  const [poolTitle, setPoolTitle] = useState("");
  const [poolDuration, setPoolDuration] = useState("");
  const [poolOptions, setPoolOptions] = useState([""]);
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
  return (
    <div className="popUp">
      <div className="popbox">
        <div className="right">
          <span className="close" onClick={onClose}>
            <GrFormClose />
          </span>
        </div>
        <form className="update_promo_code">
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
            create
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVote;
