import React from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import Loader from "../../components/loader";
import InputContainer from "../../components/dashboard/InputContainer";

const CreatePrmotion = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"Create Promotion"} badge={"GM, Stranger"} />
        <form className="promo_code_form">
          <div className="generate_promo_code">
            <button type="button" className="gene_promo">
              Generate promo code
            </button>
            {/* <Loader /> */}
          </div>
          <InputContainer label={"discount"} id={"discount"} type={"text"}/>
          <InputContainer label={"max usage"} id={"usage"} type={"text"} />
          <button  type="button" className="btn">create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePrmotion;
