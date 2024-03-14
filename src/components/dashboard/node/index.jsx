import React from "react";
import "./index.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Node = ({ node }) => {
  return (
    <div className="single_node" style={{ background: node.bg_color }}>
      <div className="node_img">
        <img src={node.stats_img} alt="node" />
      </div>
      <div className="node_detail">
        <div className="detail">
          <h4 className="node_name">{node.text}</h4>
          <span className="node_slot">slotds: {node.slots}</span>
        </div>
        <div className="mange">
          <i>
            <CiEdit />
          </i>
          <i>
            <MdDeleteOutline />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Node;
