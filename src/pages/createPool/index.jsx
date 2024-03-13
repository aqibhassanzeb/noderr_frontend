import React from "react";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../components/dashboard/InputContainer";
import "./index.css";
const CreatePool = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"Create Pool"} badge={"GM, Stranger"} />
        <form className="pool_create_form">
            <InputContainer label={"vote title"} id={"vote_title"} type={"text"}/>
            <InputContainer label={"vote duration"} id={"vote_duration"} type={"text"}/>
            <InputContainer label={"vote options"} id={"vote_title"} type={"text"}/>
            <button type="button" className="btn">create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePool;
