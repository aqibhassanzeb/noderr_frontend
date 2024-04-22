import React from "react";
import "./index.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const FAQ = ({ faq, onDelete, onClick }) => {
  return (
    <div className="single_node" style={{ background: "" }}>
      <div className="node_img">
        {/* <img src={node.nodeImage.url} alt="node" /> */}
      </div>
      <div className="node_detail">
        <div className="detail">
          <h4 className="node_name">{faq?.question}</h4>
          <span className="node_slot">{faq?.answer}</span>
        </div>
        <div className="mange">
          <i onClick={onClick}>
            <CiEdit />
          </i>
          <i onClick={onDelete}>
            <MdDeleteOutline />
          </i>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
