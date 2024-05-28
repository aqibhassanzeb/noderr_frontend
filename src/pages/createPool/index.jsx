import React, { useContext, useState } from "react";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../components/dashboard/InputContainer";
import "./index.css";
import { createApiContext } from "../../context/apiContext";
import { toast } from "react-toastify";
import LoadingModal from "../../components/ApiLoader";
import { useNavigate } from "react-router-dom";
import { images } from "../../images";
import { IoArrowBackCircle } from "react-icons/io5";

const CreatePool = () => {
  const navigate = useNavigate();
  const handleCloseCreate = () => {
    navigate('/dashboard/all-votes');
  };

  const { createPool } = useContext(createApiContext);
  const [poolTitle, setPoolTitle] = useState("");
  const [poolDuration, setPoolDuration] = useState("");
  const [poolOptions, setPoolOptions] = useState([""]);
  const [loading, setLoading] = useState(false);

  //handle the change of the option field
  const handleOptionChange = (index, value) => {
    const newOptions = [...poolOptions];
    newOptions[index] = value;
    setPoolOptions(newOptions);
  };

  //add a new option field
  const addOptionField = () => {
    setPoolOptions([...poolOptions, ""]);
  };

  //remove the option field
  const removeOptionField = (index) => {
    const newOptions = [...poolOptions];
    newOptions.splice(index, 1);
    setPoolOptions(newOptions);
  };

  //handle the pool creation
  const handelPoolCreate = async () => {
    setLoading(true);
    const data = {
      voteTitle: poolTitle,
      durationInDays: poolDuration,
      voteOptions: poolOptions,
    };

    const response = await createPool(data);
    if (response.status == 'success') {
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

  //handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    handelPoolCreate();
  };

  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
          <div className="mb-2 py-3">
            <span className="close" onClick={handleCloseCreate} >
              <IoArrowBackCircle className="text-white w-8 h-8" />
            </span>
          </div>
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
