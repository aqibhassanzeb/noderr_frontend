import React from "react";
import "./index.css";
import Togglor from "../../components/toggle";
import PageHeader from "../../components/dashboard/pageHeader/pageHeader";
const Support = () => {
  return (
    <div className="right_dashboard">
      <div className="right_container">
        <PageHeader page_title={"Support"} badge={"GM, Stranger"} />
        <form className="support_form">
          <div className="input_container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="input_container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input_container">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <button type="button" className="submit_btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
