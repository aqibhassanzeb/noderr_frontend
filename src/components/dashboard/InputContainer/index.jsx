import React from "react";
import "./index.css";
const InputContainer = ({ label, id, type, value, onChange, name, disable, textColor, placeholder }) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>{label}</label>
      <input className={textColor} placeholder={placeholder} type={type} id={id} value={value} onChange={onChange} name={name} disabled={disable} />
    </div>
  );
};

export default InputContainer;
