import React from "react";
import "./index.css";
const Support = () => {
  return (
    <div className="support_section">
      <div className="support_container">
        <div className="header">
          <h3 className="left">Support</h3>
        </div>
        <h2>support</h2>
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
          <button type="button" className="submit_btn">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Support;
