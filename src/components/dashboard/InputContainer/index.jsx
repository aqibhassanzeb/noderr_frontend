import React from "react";
import "./index.css";
const InputContainer = ({ label, id, type }) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default InputContainer;
