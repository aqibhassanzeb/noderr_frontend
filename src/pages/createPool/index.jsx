import React, { useContext, useState } from "react";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../components/dashboard/InputContainer";
import "./index.css";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../components/ApiLoader";
import { useNavigate } from "react-router-dom";
import { images } from "../../images";

const CreatePool = () => {
  const { createPool } = useContext(createApiContext);
  const navigate = useNavigate();
  const [poolTitle, setPoolTitle] = useState("");
  const [poolDuration, setPoolDuration] = useState("");
  const [poolOptions, setPoolOptions] = useState([""]);
  const [loading, setLoading] = useState(false);

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
  const handelPoolCreate = async () => {
    setLoading(true);
    const data = {
      voteTitle: poolTitle,
      durationInDays: poolDuration,
      voteOptions: poolOptions,
    };
    const response = await createPool(data);
    if (response.success) {
      setLoading(false);
      setPoolTitle("");
      setPoolDuration("");
      setPoolOptions([""]);
      toast.success("Pool created successfully");
      navigate("/dashboard/all-votes");
    } else if (response.response.data.message) {
      setLoading(false);
      toast.error(response.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handelPoolCreate();
    // Add your logic to handle the form submission here
  };

  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
          <PageHeader page_title={"Create Pool"} badge={"GM, Noderr"}
          profilePic={images.FakePic} />
          <form className="pool_create_form" onSubmit={handleSubmit}>
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
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePool;
