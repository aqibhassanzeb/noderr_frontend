import React from "react";
import "./index.css";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../components/dashboard/InputContainer";
import { images } from "../../images";
const CreateNode = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"Create Node"} badge={"GM, Stranger"} />
        <form className="node_create_form">
          <InputContainer label={"Node Name"} id={"node_name"} type={"text"} />
          <InputContainer
            label={"node price"}
            id={"node_price"}
            type={"text"}
          />
          <InputContainer label={"slots"} id={"slots"} type={"text"} />
          <div className="input_file">
            <label htmlFor="Ffile">Node Image</label>
            <label htmlFor="dropzone-file" className="upload_image">
              <div className="upload_sign">
                <p style={{ color: "#000000" }}>upload image</p>
                <div className="image_container">

                <img src={images.uploadSign} alt="uploadSign" />
                </div>
              </div>
              <input
                type="file"
                id="dropzone-file"
                style={{ display: "none" }}
              />
            </label>
          </div>
          <button type="button" className="btn">
            create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNode;
