import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import "./index.css";
const CURDBtn = ({onDelete,onEdit}) => {
  return (
    <div className="crud_btn">
      {/* <span className="view">
        <FaEye />
      </span> */}
      <span className="update" onClick={onEdit}>
        <CiEdit />
      </span>
      <span className="delete" onClick={onDelete}>
        <MdDeleteOutline />
      </span>
    </div>
  );
};

export default CURDBtn;
