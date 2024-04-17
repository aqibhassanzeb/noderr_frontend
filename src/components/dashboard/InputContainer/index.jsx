import React from "react";
import "./index.css";
const InputContainer = ({ label, id, type, value, onChange, name, disable, textColor }) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>{label}</label>
      <input className={textColor} type={type} id={id} value={value} onChange={onChange} name={name} disabled={disable} />
    </div>
  );
};

export default InputContainer;
