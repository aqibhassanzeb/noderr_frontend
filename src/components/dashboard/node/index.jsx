import React from "react";
import "./index.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Node = ({ node, onDelete, onClick, bg_color }) => {
  return (
    <div className="single_node" style={{ background: node.bgColor }}>
      <div className="node_img">
        <img src={`${process.env.REACT_APP_NODE_IMG_URL}${node?.nodeImage?.url}`} alt="node"  className=" w-9 h-8 "/>
      </div>
      <div className="node_detail">
        <div className="detail">
          <h4 className={`${bg_color === "#FFFFFF" ? "text-black" : "text-white"} node_name1`}>{node.nodeName}</h4>
          <span className={`${bg_color === "#FFFFFF" ? "text-black" : "text-white"} node_slot1`}>slots: {node.slots}</span>
        </div>
        <div className="mange">
          <i onClick={onClick}>
            <CiEdit className={`${bg_color === "#FFFFFF" ? "text-black" : "text-white"}`} />
          </i>
          <i onClick={onDelete}>
            <MdDeleteOutline className={`${bg_color === "red" ? "text-white" : "text-red-600"}`} />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Node;
